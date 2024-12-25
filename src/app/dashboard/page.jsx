import { SignIn, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10 '>
<h1 className='font-bold text-2xl'>Dashboard</h1>
<h2 className='text-zinc-500 '>Create and Start Your AI MockUp Interview</h2>
<div className='grid grid-cols-1 md:grid-cols-3 my-5'>
  <AddNewInterview/>
 
</div>
<InterviewList/>
    </div>
  )
}

export default Dashboard