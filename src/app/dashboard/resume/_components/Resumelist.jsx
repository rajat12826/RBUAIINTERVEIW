"use client";
import supabase from "@/utils/supabaseClients";
import { PlusSquare } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import "../../../globals.css"
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Addresume from "./Addresume";
function Resumelist({resumelist,setResumeList}) {
  const { user,isLoaded } = useUser();
  console.log(user?.primaryEmailAddress?.emailAddress);
  
  const router=useRouter()
  useEffect(() => {
    // console.log(user);

    if (isLoaded && user) {
      fetchResume();
    }
  }, [isLoaded,user]);
  const fetchResume = async () => {
    const { data, error } = await supabase
      .from("userResume")
      .select()
      .order("created_at", { ascending: false })
      .eq("useremail", user?.primaryEmailAddress?.emailAddress);
      
    console.log(user?.primaryEmailAddress?.emailAddress);
    // console.log(user);

    setResumeList(data);
    console.log(resumelist + "j");
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  sm:text-xl  md:grid-cols-4  ">
      <Addresume resumelist={resumelist} setResumeList={setResumeList} />
    {resumelist?.map((item, index) => (
      <div className="m-5 " key={index}>
        <Link href={`/dashboard/resume/${item?.resumeid}`}>
          <Button
            // onClick={() => {}}
            containerClassName="h-[120px] w-[120px]sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:h-[220px] lg:w-[220px] hover:scale-105 rounded-lg"
            borderRadius="1rem"
            className="bg-white p-5 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Resume {index + 1}: {item?.title}
          </Button>
        </Link>
      </div>
    ))}
  </div>
  

  );
}

export default Resumelist;
