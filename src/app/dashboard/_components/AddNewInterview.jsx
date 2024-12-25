"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModel';
import { LoaderCircle } from 'lucide-react';
import supabase from '@/utils/supabaseClients';
import { uuid } from 'drizzle-orm/pg-core';
import {v4 as uuidv4} from "uuid"
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

  
function AddNewInterview() {
    // consst [open,setOpen]=React.useState(false)
 
    const [jobposition,setjobposition]=useState("")
    const [jobdescription,setjobdescription]=useState("")
    const [jobexp,setjobexp]=useState(0)
    const [loading,setloading]=useState(false)
    const[JSONResponse,setJSONResponse]=useState("")
    const router=useRouter()
    const {user}=useUser()
    const onSubmit=async()=>{
        setloading(true)
        console.log(jobdescription);
        const inputPrompt=`
        Job Position: ${jobposition} , Job Description:${jobdescription}, Year Of Experience:${jobexp} ,Depends on this inofrmation give me 5 interview question with answer in json format . Give question and answer as field in JSON`
        const result =await chatSession.sendMessage(inputPrompt)
        const mockresponse=(result.response.text())
        // console.log(result.response.text());
        setJSONResponse(mockresponse)
        setjobdescription("")
        setjobposition("")
        setjobexp(0)
       if(mockresponse){
        const{ data, error }=await supabase.from("MockInterview")
        .insert({
            mockId:uuidv4(),
            jsonMockResp:mockresponse,
            jobposition:jobposition,
            jobDesc:jobdescription,
            jobExperience:jobexp,
            createdBy:user?.primaryEmailAddress?.emailAddress
        })
        .select()
        if(data){
            router.push("/dashboard/interview/"+data[0]?.mockId)
        }
        
       }
        
        setloading(false)
    }
  return (
    <div className=''>
        
        <Dialog>
      <DialogTrigger asChild>
      <button class="relative   shadow-lg border-2 dark:border-none rounded-lg dark:shadow-md  shadow-gray-300 inline-flex items-center justify-start py-5 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out  hover:pl-10 hover:pr-6 bg-gray-50 group">
    <span class="absolute bottom-0 left-0 w-full  transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add Interview</span>
</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-8 dark:bg-zinc-900 dark:shadow-md dark:shadow-[#00b0ff] ">
        <DialogHeader>
          <DialogTitle>Tell us more about Job you are interviewing</DialogTitle>
          <DialogDescription className="font-medium">
            Add Details about job position, Your skills and Year of experience
          </DialogDescription>
        </DialogHeader>
        <div className="grid  items-center ">
          <div className="grid flex-1 gap-2   ">
            <Label htmlFor="link" className="font-semibold text-zinc-600 dark:text-white " >
         Job Position / Role Name
            </Label>
            <Input
              id="link"
              placeholder="Ex. Full Stack Developer"
              className="bg-zinc-100 border-2 dark:text-black "
              required
              defaultValue={jobposition}
              onChange={(e)=>{setjobposition(e.target.value)}}
            />
          </div>
          <div className="grid flex-1 gap-2  mt-5 ">
            <Label htmlFor="link" className="font-semibold text-zinc-600  dark:text-white" >
         Job Description / Tech Stack In Short
            </Label>
            <Textarea
              id="link"
              placeholder="Ex. React, Angular,NodeJs,MySql etc"
              className="bg-zinc-100 border-2 dark:text-black"
              required
              defaultValue={jobdescription}
              onChange={(e)=>{setjobdescription(e.target.value)}}
            />
          </div>
          <div className="grid flex-1 gap-2  mt-5 ">
            <Label htmlFor="link" className="font-semibold text-zinc-600 dark:text-white " >
         No. Of Year Of Experience
            </Label>
            <Input
              id="link"
              placeholder="5"
              defaultValue={jobexp}
              className="bg-zinc-100 border-2 dark:text-black"
              required
              onChange={(e)=>{setjobexp(e.target.value)}}
            />
          </div>
        
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={()=>{
                 setjobdescription("")
                 setjobposition("")
                 setjobexp(0)
            }}>
              Cancel
            </Button>
           
          </DialogClose>
          <Button type="submit" disabled={loading} onClick={()=>(onSubmit())}  className="px-3 dark:text-white bg-[#304ffe] hover:bg-[#4258d2]">
           {loading?<>
           <LoaderCircle className='animate-spin'/>Generating From AI</>:"Start Interview"}
         
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddNewInterview