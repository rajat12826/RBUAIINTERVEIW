"use client";
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import Formsection from '../_components/Formsection';
import ResumePreview from '../_components/ResumePreview';
import { ResumeInfoContext } from '../_components/context/Resumeinfocontext';
import dummy from '../_components/dummy';
import supabase from '@/utils/supabaseClients';
import Header from '../../_components/Header';

function ResumeEdit({params}) {
  const {user}=useUser()
  const[resumeinfo,setresumeinfo]=useState([])
  const[pro,setpro]=useState([])
  const[work,setwork]=useState([])
  const[edu,setedu]=useState([])
    const resumeid= React.use(params).resumeid
   useEffect(()=>{
    // console.log(user);
    const getResumeInfo=async()=>{
      const{data,error}=await supabase.from("userResume")
      .select()
      .eq("resumeid",resumeid)
      setresumeinfo(prevState => ({
        ...prevState,
        firstName: data[0]?.firstName,
        lastName: data[0]?.lastName,
        email: data[0]?.email,
        resumeid: data[0]?.resumeid,
        linkedin:data[0]?.linkedin,
        portfolio:data[0]?.portfolio,
        phone:data[0]?.phone,
        summary:data[0]?.summary,
        skills:data[0]?.skills,
        github:data[0]?.github,
        themeColor:data[0]?.themeColor
      }));
     
      
    }
   
    getResumeInfo()
  
    console.log(resumeinfo);
    
   },[])
   useEffect(()=>{
    const getResumeProject=async()=>{
      const{data,error}=await supabase.from("projects")
      .select()
      .eq("resumeid",resumeid)
      console.log(data);
      
      setresumeinfo(prevState => ({
        ...prevState,
        projects: data
      }));
    setpro(data)
    }
    getResumeProject()
  
   },[])
   useEffect(()=>{
    const getResumeEducation=async()=>{
      const{data,error}=await supabase.from("education")
      .select()
      .eq("resumeid",resumeid)
      console.log(data);
      
      setresumeinfo(prevState => ({
        ...prevState,
        education:data
      }));
    setedu(data)
    }
   getResumeEducation()
  
   },[])
   useEffect(()=>{
    const getResumeExp=async()=>{
      const{data,error}=await supabase.from("experience")
      .select()
      .eq("resumeid",resumeid)
      console.log(data);
      
      setresumeinfo(prevState => ({
        ...prevState,
        experience: data
      }));
      setwork(data)
    
    }
    getResumeExp()
  
   },[])
   
  return (
   <div>
    {/* <Header/> */}
  <div>
    <Header/>
  <ResumeInfoContext.Provider value={{resumeinfo,setresumeinfo}}>
 {/* <div> */}
      <div className='grid grid-cols-1 md:grid-cols-2  gap-10'>
    <Formsection resumeid={resumeid} pro={pro} education={edu} work={work}/>

    <ResumePreview />
      {/* </div> */}
    </div>

   </ResumeInfoContext.Provider>
   </div>
  </div>
  )
}

export default ResumeEdit