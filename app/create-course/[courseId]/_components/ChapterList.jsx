import React from 'react'
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2"; 

function ChapterList({course}) {
  return (
    <div className='mt-3'>
      <h2 className='font-medium text-xl'>Chapters</h2>
      <div className='mt-2'>
        {course?.courseOutput?.chapters.map((chapters, index) => (
          <div className='border p-5 reounded-lg mb-2 flex items-center justify-between'>
            <div className='flex gap-5 items-center'>
              <h2 className='flex-none h-10 w-10 bg-primary text-white rounded-full text-center p-2'>{index+1}</h2>
              <div>
                <h2 className='text-medium text-lg'>{chapters?.chapterName}</h2>
                <p className='text-sm text-gray-500'>{chapters?.about}</p>
                <p className='flex gap-2 text-primary items-center'> <HiOutlineClock /> {chapters?.duration}</p>
              </div>
            </div>
            <HiOutlineCheckCircle className='text-4xl text-gray-300 flex-none' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChapterList