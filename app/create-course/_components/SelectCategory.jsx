import { useContext, useState} from 'react'
import { UserInputContext } from '@/app/_context/UserInputContext'
import React from 'react'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'

function SelectCategory() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  
  const handleCategoryChange=(category)=>{
    setUserCourseInput(prev=>({
      ...prev,
      category:category
    }));
  }
  return (
    <div className='px-10 md:px-20'>

      <h2 className='my-5'>Selct the Course Category</h2>

    <div className='grid grid-cols-3 gap-10 '>
      {CategoryList.map((item, index) => (
        <div className={`flex flex-col m-5 p-5 border rounded-xl items-center hover:border-primary hover:bg-blue-50 cursor-pointer
          ${userCourseInput?.category===item.name&&'border-primary bg-blue-50'}`}
        key={index}
        onClick={() => handleCategoryChange(item.name)}
        >
          <Image src={item.icon} width={50} height={50} alt={item.name || 'category'} />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
     </div>
  )
}

export default SelectCategory