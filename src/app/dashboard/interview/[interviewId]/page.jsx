"use client";
import { Button } from '@/components/ui/button';
import supabase from '@/utils/supabaseClients'
import { Lightbulb } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Interview({params}) {
    const[interviewData,setinterviewData]=useState();
    // const { interviewId } = params;
    const interviewId=React.use(params).interviewId
    useEffect(()=>{
getInterviewDetails()
    },[])
    const getInterviewDetails=async()=>{
        const{data,error}=await supabase.from("MockInterview")
        .select()
        .eq("mockId",interviewId)
        setinterviewData(data)
        
        
    }
  return (
    <div className='my-10  cursor-default mx-5  md:px-20 lg:mx-36  flex justify-center flex-col items-center '>
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10  sm:my-20'>
            <div >
                <div className=' p-5 rounded-lg flex flex-col my-5 gap-5     cursor-default  '> 
                    
                        <h1 className='font-semibold text-zinc-600 dark:text-zinc-300 '>Job Role/Job Position: <span className='font-medium dark:text-white text-zinc-800 '>{interviewData &&  interviewData[0]?.jobposition.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</span> </h1>
                        <h1 className='font-semibold text-zinc-600 dark:text-zinc-300 fle '>Job Description/Tech Stack: <span className='font-medium dark:text-white text-black '>{interviewData &&  interviewData[0]?.jobDesc.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</span> </h1>
                        <h1 className='font-semibold text-zinc-600 dark:text-zinc-300 '>Year Of Experience: <span className='font-medium dark:text-white text-black '>{interviewData &&  interviewData[0]?.jobExperience.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</span></h1>
                   
                </div>
                <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100 dark:shadow-yellow-400 dark:shadow-md'>
                    <h2 className='flex gap-2 items-center text-yellow-500  '><Lightbulb/><span>Information</span></h2>
                    <h2 className='mt-3 text-yellow-500'>Enable  Microphone to Start your Al Generated Mock Interview, It Has 5 question which you can answer and at the last you will get the report on the basis of your answer. </h2>
                </div>
            </div>
            <div className='flex justify-center items-center '>
            
            <button className='bg-[#304ffe] hover:font-bold hover:bg-[#193ddf]  rounded-sm text-white text-center  p-3'>
            Click Me To Enable Mic Permission
        </button>
           
            </div>
        </div>
       <div className='py-5  '>
       <Link href={'/dashboard/interview/'+interviewId+"/start"}>
       <Button className="bg-[#f44336] px-10 py-5 rounded-lg hover:font-bold  hover:bg-[#ff1744] dark:text-white">
            Start Interview
        </Button></Link>
       </div>
    </div>
  )
}

export default Interview
