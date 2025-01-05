"use client"
import React, { useEffect, useRef, useState } from 'react'
import ResumePreview from '../dashboard/resume/_components/ResumePreview'
import ResumePreviewDownload from '../dashboard/resume/_components/ResumePreviewDownload'
import supabase from '@/utils/supabaseClients'

function page({params}) {
    const {user}=useUser()
    const resumeRef = useRef();
    
    const[resumeinfo,setresumeinfo]=useState([])
    const[pro,setpro]=useState([])
    const[work,setwork]=useState([])
    const[edu,setedu]=useState([])
      const resumeid= React.use(params).resumeid
      console.log(resumeid);
     useEffect(()=>{
      // console.log(user);
      const getResumeInfo=async()=>{
        const{data,error}=await supabase.from("userResume")
        .select()
        .eq("resumeid",resumeid)
        setresumeinfo(prevState => ({
          ...prevState,
          firstName: data[0].firstName,
          lastName: data[0].lastName,
          email: data[0].email,
          resumeid: data[0].resumeid,
          linkedin:data[0].linkedin,
          portfolio:data[0].portfolio,
          phone:data[0].phone,
          summary:data[0].summary,
          skills:data[0].skills,
          github:data[0].github,
          themeColor:data[0].themeColor
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
     const handleDownload = () => {
        const element = resumeRef.current;
        html2pdf()
          .from(element)
          .save('resume.pdf');  // Save the PDF with the name "resume.pdf"
      };
    
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
    <div id="print-area"><ResumePreviewDownload data={resumeinfo} /></div>
  )
}

export default page