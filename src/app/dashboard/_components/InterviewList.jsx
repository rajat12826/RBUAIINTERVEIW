"use client";
import supabase from "@/utils/supabaseClients";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import InterviewCard from "./InterviewCard";

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setinterviewList] = useState([
    // {
    //   mockId: "hbh",
    //   jobPosition: "Full stack developer",
    //   jobExperience: "5",
    //   createdAt: "2024:12:05",
    // },
    // {
    //   mockId: "hbh",
    //   jobPosition: "Full stack developer",
    //   jobExperience: "5",
    //   createdAt: "2024:12:05",
    // },
  ]);
  useEffect(()=>{
      // setinterviewList(prev=>prev.push({id:"hbh"}))
          getInterviewList()
  },[user])
  const getInterviewList=async()=>{
      const {data,error}=await supabase.from("MockInterview")
      .select()
      .eq("createdBy",user?.primaryEmailAddress?.emailAddress)
      .order("id",{ ascending: false })
      setinterviewList(data)
  }
  console.log(interviewList);

  return (
    <div className="my-5 ">
      <h2 className="font-medium text-xl">Previous Mock Interviews</h2>
      {
        interviewList.length==0?<h2 className="my-2 ml-2 text-xl">
          No Previous Interviews Found :(
        </h2>:null
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interviewList &&
          interviewList.map((interview, index) => (
            <InterviewCard key={index} interview={interview} />
          ))}
      </div>
    </div>
  );
}

export default InterviewList;
