import { SignInButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section className="bg-white lg:grid  lg:place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">
        AI Course Generator 
        <strong className="text-black"> Custom Learning Paths , Powered by AI </strong>
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
       Unlocked personalized education with AI-driven course creation . Tailor your learning journey to fit your unique goals and pace !
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <SignInButton
          className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary"
          href="#"
        >
          
          <Button>Get Started</Button>
          
        </SignInButton>

       
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero