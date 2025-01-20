"use client";
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import useSpeechToText from 'speech2textjs';  // Make sure this import is correct
import { Toaster } from "@/components/ui/sonner"
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel';
import supabase from '@/utils/supabaseClients';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex ,setActiveQuetionIndex,interviewData}) {
    const [userAnswer, setUserAnswer] = useState("");  // Use camelCase for state variable names
    const {user}=useUser()
    const [loading,setloading]=useState(false)
    const { isListening, transcript, startListening, stopListening } = useSpeechToText({ continuous: true });
    
    const previousTranscript = useRef("");  // Ref to keep track of the last successful transcript

    const startStopListening = async() => {
        if (isListening) {
           
            // setUserAnswer(transcript)
            if(transcript.length<=0){
                setloading(false)
                stopVoiceInput();
                // toast("Errror while saving your recording")
                return
            }
            stopVoiceInput();
            
            
           
           
        } else {
            startListening();
        }
    };
    // grid ${activeQuestionIndex==0 && activeQuestionIndex+1!=mockInterviewQuestion?.interviewQuestions?.length?" grid-cols-1 ":" grid-cols-2 "}
const updateUserAnswer=async(btn)=>{
    setloading(true)
    const feeadbackPrompt = `
    Question: ${mockInterviewQuestion?.interviewQuestions[activeQuestionIndex]?.question}
    User Answer: ${ userAnswer || "No Answer Provided"}
    Context: The user is applying for the position of ${interviewData?.jobposition} with ${interviewData?.jobExperience} years of experience.
    Task: Evaluate the user's answer that is User Answer . If the answer is sufficient, provide a rating of 5 or higher, indicating the quality and depth of the answer. If the answer lacks sufficient detail or misses critical concepts, provide a lower rating (1-4), with actionable feedback for improvement. and provide actionable feedback in JSON format with "rating" and "feedback" fields.
    Example Format:
    {
      "rating": 0,
      "feedback": "The answer is incomplete. Please provide a detailed explanation or examples to support your response."
    }
    Provide your response in this JSON format:
    `;
    


    const result=await chatSession.sendMessage(feeadbackPrompt)
    const mockJSONResp=(result.response.text())
   
    const Jsonfeedback=JSON.parse(mockJSONResp)
    const {data,error}=await supabase.from("userAnswer")
    .upsert({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestion.interviewQuestions[activeQuestionIndex]?.question,
        correctAns:mockInterviewQuestion.interviewQuestions[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback:Jsonfeedback.feedback,
        rating:Jsonfeedback.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        questionidRef:interviewData?.mockId+""+activeQuestionIndex
    })  .select()
    if(error){
        const { data:data1, error:error1 } = await supabase
  .from('userAnswer')
  .update({ userAns: userAnswer, feedback:Jsonfeedback.feedback,
    rating:Jsonfeedback.rating, })
  .eq("questionidRef",interviewData?.mockId+""+activeQuestionIndex)
  .select()
  if(data1){
    toast("User data recorded successfully ")
  }

    }
    if(data){
        toast("User data recorded successfully ")
    }         
setloading(false)
setUserAnswer('')
if(btn){
    setActiveQuetionIndex(activeQuestionIndex+1)
}
else{
    setActiveQuetionIndex(activeQuestionIndex-1)
}
}
    const stopVoiceInput = () => {
        setUserAnswer(prev => prev + " " + transcript);
        stopListening();
    };

    useEffect(() => {
       
        if (isListening) {
            const newText = transcript.replace(previousTranscript.current, "").trim();
            if (newText) {
        
                setUserAnswer(prev => prev + (prev ? " " : "") + newText);
                previousTranscript.current = transcript; 
            }
        }
    }, [isListening]); 

    return (
        <div className='w-full mb-10  '>
            <div className='flex justify-center my-2 items-center'>
         
            <button class=" rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-semibold border-[#ff1744] text-[#ff1744] text-white" onClick={startStopListening}>
    <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff1744] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span class="relative text-[#ff1744] transition duration-300 group-hover:text-white ease">   {isListening ? <h2 className='flex font-bold '><Mic className='font-bold '  /> Recording...</h2> : "Record Answer"}</span>
</button>
            </div>
           <div className=' flex justify-center items-center  '>
           <div className={`flex justify-between space-x-2  `}>
           {
                activeQuestionIndex>0 &&<button className="group relative bg-yellow-500  hover:bg-transparent   inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold" onClick={()=>{updateUserAnswer(false)}}>
                <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-transparent opacity-[3%]"></span>
                <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-yellow-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:bg-transparent group-hover:text-white">Previous Question</span>
                <span className="absolute inset-0 rounded-full border-2 border-yellow-500"></span>
              </button>
            }
            {
                activeQuestionIndex+1!=mockInterviewQuestion?.interviewQuestions?.length && <button className="group relative bg-[#304ffe]  hover:bg-transparent   inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold" onClick={()=>{updateUserAnswer(true)}}>
                <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-transparent opacity-[3%]"></span>
                <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-[#304ffe] opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:bg-transparent group-hover:text-white">Next Question</span>
                <span className="absolute inset-0 rounded-full border-2 border-[#1733d1]"></span>
              </button>
              
            }
            {
                activeQuestionIndex+1==mockInterviewQuestion?.interviewQuestions?.length && <Link href={"/dashboard/interview/"+interviewData?.mockId+"/feedback"}>
               <button className="group relative bg-green-600 hover:bg-transparent   inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold" onClick={()=>{updateUserAnswer(true)}}>
                <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-transparent opacity-[3%]"></span>
                <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-green-600 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:bg-transparent group-hover:text-white">End Interview</span>
                <span className="absolute inset-0 rounded-full border-2 border-green-600"></span>
              </button>
              </Link>
            }
            {
                
            }
           </div>
           </div>
{/*           
            <textarea
                disabled={isListening}  
                value={userAnswer}
                className='text-white'
                
            /> */}
        </div>
    );
}

export default RecordAnswerSection;
