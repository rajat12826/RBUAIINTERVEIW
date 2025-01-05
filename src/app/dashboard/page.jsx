// import { SignIn, SignInButton, UserButton } from '@clerk/nextjs'
"use client"
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import { useUser } from '@clerk/nextjs'
import Header from './_components/Header'

function Dashboard() {
  // const {user}=useUser()
  // console.log(user);
  
  return (
 <div>
  <Header/>
     <div className=' mx-5  '>
<div className='p-10'>
<h1 className='font-bold text-2xl'>Dashboard</h1>
<h2 className='text-zinc-500 dark:text-zinc-300 '>Create and Start Your AI MockUp Interview</h2>
<div className='grid grid-cols-1 md:grid-cols-3 my-5'>
  <AddNewInterview/>
 
</div>

</div>
<h2 className="font-semibold text-xl px-10">Previous Mock Interviews</h2>
<InterviewList/>
    </div>
 </div>
  )
}

export default Dashboard