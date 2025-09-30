import React, { useContext } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UserInputContext } from '@/app/_context/UserInputContext';

function TopicDescription() {

    const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
    const handleTopicChange=(fieldName,value)=>{
      setUserCourseInput(prev=>({
        ...prev,
        [fieldName]:value
      }))
    }
  return (
    <div className="mx-20 lg:mx-44">
      {/* Input Topic */}
      <div className="mt-5">
        <label htmlFor="topic-input">
          Write the topic for which you want to generate a course(Ex.Python, Yoga, Music, etc.)
        </label>
        <Input
          id="topic-input"
          placeholder={"Topic"}
          className="h-14 text-xl"
          defaultValue={userCourseInput?.topic}
          onChange={(e)=>handleTopicChange('topic',e.target.value)}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="description-textarea">
          Tell us more about your course, what you want to include in the course(Optional) etc.
        </label>
        <Textarea
          id="description-textarea"
          placeholder="About your course"
          className=" h-24 text-xl "
          defaultValue={userCourseInput?.description}
          onChange={(e)=>handleTopicChange('description',e.target.value)}
        />
      </div>

      {/* Text Area Desc */}
    </div>
  )
}

export default TopicDescription