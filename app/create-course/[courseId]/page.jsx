"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
import { Button } from '@/components/ui/button';
import LoadingDialog from '../_components/LoadingDialog';
import { GenerateChapterContent_AI } from '@/configs/AiModel';

function CourseLayout({params: { courseId }}) {
    const { user, isLoaded } = useUser(); 
    const [course, setCourse] = useState(null); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Use courseId directly from destructuring
        if (courseId && isLoaded && user?.primaryEmailAddress?.emailAddress) {
            GetCourse();
        }
    }, [courseId, isLoaded, user]); 

    const GetCourse = async () => {
        if (!user?.primaryEmailAddress?.emailAddress) {
            console.error("User email address is not available.");
            return;
        }

        try {
            const result = await db.select()
                .from(CourseList)
                .where(
                    and(
                        // Use courseId directly
                        eq(CourseList.courseId, courseId),
                        eq(CourseList.createdBy, user.primaryEmailAddress.emailAddress)
                    )
                );
            
            if (result && result.length > 0) {
                setCourse(result[0]);
                console.log(result[0]);
            } else {
                setCourse(null);
                console.log("No course found for this user/ID combination.");
            }
        } catch (error) {
            console.error("Error fetching course:", error);
            setCourse(null);
        }
    }

    const GenerateChapterContent = async () => {
        setLoading(true);

        if (!course?.courseOutput?.chapters) {
            console.error("Course or chapters data is missing.");
            setLoading(false);
            return;
        }

        const chapterPromises = course.courseOutput.chapters.map(async (chapter, index) => {
            if (index < 3) { 
                const PROMPT = 'Explain the concept in Detail on Topic:' + course.name + ', Chapter:' + chapter.chapterName + ', in JSON Format with list of array with field as title, explanation on given chapter in detail, Code Example(HTML field in <precode> format) if applicable';
                
                try {
                    console.log(`Generating content for chapter ${index + 1}: ${chapter.chapterName}`);
                    const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
                    console.log(result?.response?.text); 

                    return { success: true, chapterName: chapter.chapterName };

                } catch (e) {
                    console.error(`Error generating content for chapter ${chapter.chapterName}:`, e);
                    return { success: false, chapterName: chapter.chapterName, error: e.message };
                }
            }
            return null; 
        }).filter(p => p !== null); 

        await Promise.all(chapterPromises);
        
        setLoading(false);
        console.log("All selected chapter content generation attempts completed.");
    }
    
    if (!isLoaded) {
        return <div className='mt-10 px-7 md:px-20 lg:px-44 font-medium'>Loading user data...</div>;
    }
    
    if (!course && isLoaded) {
        return <div className='mt-10 px-7 md:px-20 lg:px-44 font-medium'>Loading course details or course not found...</div>;
    }

    return (
        <div className='mt-10 px-7 md:px-20 lg:px-44'> 
            <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

            <LoadingDialog loading={loading}/>
            <CourseBasicInfo course={course} refreshData={GetCourse}/>
            <CourseDetail course={course} /> 
            <ChapterList course={course} refreshData={GetCourse}/>

            <Button onClick={GenerateChapterContent} className='my-10'>Generate Course Content</Button>
        </div>
    )
}

export default CourseLayout;