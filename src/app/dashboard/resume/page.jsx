"use client";
import React, { useEffect, useState } from "react";
import Addresume from "./_components/Addresume";
import supabase from "@/utils/supabaseClients";
import { useUser } from "@clerk/nextjs";
import Resumelist from "./_components/Resumelist";
import Header from "../_components/Header";
function Resume() {
  const { user } = useUser();
  // console.log(user);
const [resumelist, setResumeList] = useState([]);
  return (
  <div>
    <Header/>
    <div className="p-5 sm:p-10 ">
      <div>
        <h1 className="text-4xl text-indigo-600 dark:text-indigo-500">My Resumes</h1>
        <h2>Start Creating AI Resume For Your Next Job Role</h2>
      </div>

      <div className="">
        
        <Resumelist resumelist={resumelist} setResumeList={setResumeList}  />
      </div>
    </div>
  </div>
  );
}

export default Resume;
