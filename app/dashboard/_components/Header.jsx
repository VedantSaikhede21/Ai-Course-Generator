import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-lg'>
      <Image src={'/HLOGI1.png'} width={77} height={77} alt='hlogo'/>
      <UserButton/>
    </div>
  )
}

export default Header