"use client"
import supabase from '@/utils/supabaseClients';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';

function StartInterview({params}) {
    const[interviewData,setinterviewData]=useState();
    const[mockInterviewQuestion,setmockInterviewQuestion]=useState()
    const[activeQuestionIndex,setActiveQuetionIndex]=useState(0)
    useEffect(()=>{
        getInterviewDetails()
            },[])
    const getInterviewDetails=async()=>{
        const{data,error}=await supabase.from("MockInterview")
        .select()
        .eq("mockId",params.interviewId)
        setinterviewData(data[0])
       
        const jsonMockResp=JSON.parse(data[0].jsonMockResp)
        setmockInterviewQuestion(jsonMockResp)
    }
  return (
    <div className='md:flex w-full '>
        <div className='flex flex-col   '>
      <div className='px-10'>
      <QuestionSection mockInterviewQuestion={mockInterviewQuestion} activeQuestionIndex={activeQuestionIndex} setActiveQuetionIndex={setActiveQuetionIndex}/>
      </div>
        {/* </div>
        <div className='flex items-center justify-center  '> */}
       <div className=''>
       <RecordAnswerSection mockInterviewQuestion={mockInterviewQuestion} activeQuestionIndex={activeQuestionIndex} setActiveQuetionIndex={setActiveQuetionIndex} interviewData={interviewData}/>
       </div>
        </div>
    </div>
  )
}

export default StartInterview