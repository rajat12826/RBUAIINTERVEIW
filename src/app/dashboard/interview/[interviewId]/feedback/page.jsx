"use client";
import supabase from "@/utils/supabaseClients";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsDownUpIcon, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function FeedBack({ params }) {
  const [feedbackList, setfeedbackList] = useState([]);
  const router=useRouter()
  useEffect(() => {
    setrating(0)
    getFeedback();
    for(let i=0;i<feedbackList.length;i++){
      // console.log(Number((feedbackList[i]?.rating).charAt(0)));
      setrating(prev=>prev+Number((feedbackList[i]?.rating).charAt(0)))
      
    }
  }, []);
  const [rating,setrating]=useState(0)
  const getFeedback = async () => {
    const { data, error } = await supabase
      .from("userAnswer")
      .select()
      .eq("mockIdRef", params.interviewId)
      .order("id", { ascending: true });
 
    setfeedbackList(data);
    const totalRating = data.reduce((sum, item) => {
      const ratingValue = Number(item.rating?.charAt(0)) || 0;
      
      
      return sum + ratingValue;
    }, 0);

    setrating(totalRating / data.length);
   
    
  };

  return (
    <div className="p-10 font-product  ">
   
     
     {
      feedbackList?.length==0?<h2 className="font-bold text-xl flex justify-center  dark:text-zinc-100 my-16 text-zinc-500">
          No FeedBack Found
      </h2>:
      <div>
           <h2 className="text-3xl font-bold text-green-600 ">Congratulations</h2>
           <h2 className="font-bold text-2xl">Here is your interveiw feedback</h2>
         <h2 className="my-3 ">
        Your Overall interview rating:
        <strong className={`ml-2 ${ Number(rating)>5?" text-green-500 ":" text-red-500 "}`}>{rating}/10</strong>
      </h2>
      <h2 className="text-sm text-zinc-500 dark:text-zinc-300 font-semibold ">
        Find below interview question with correct answer,Your answer and
        feedback for improvement{" "}
      </h2>
      {feedbackList &&
         feedbackList.map((item, index) => (
           
           <Collapsible key={index} className="mt-7 dark:text-zinc-600 ">
             
             <CollapsibleTrigger className="p-2 bg-zinc-100 rounded my-2 text-left flex justify-between  gap-7 w-full ">
               {item.question} <ChevronsUpDown className="h-5 w-5 " />
             </CollapsibleTrigger>
             <CollapsibleContent>
               <div className="flex flex-col gap-2 dark:text-zinc-800 ">
                 <h2 className="text-red-500  dark:text-[#ff1744] p-2 border rounded-lg">
                   <strong>Rating: </strong>
                   {item.rating}
                 </h2>
                 <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900 dark:text-red-500">
                   <strong>Your Answer: </strong>
                   {item.userAns}
                 </h2>
                 <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-600">
                   <strong>Correct Answer: </strong>
                   {item.correctAns}
                 </h2>
                 <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-600">
                   <strong>Feedback: </strong>
                   {item.feedback}
                 </h2>
               </div>
             </CollapsibleContent>
           </Collapsible>
         ))}
      </div>
     }
      
        <div className="flex justify-center ">
        <button  onClick={()=>router.replace('/dashboard')} class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-600 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-600 rounded-full blur-md"></span>
    </span>
    <span class="relative text-white">Back To DashBoard</span>
</button>  
        </div>
    </div>
  );
}

export default FeedBack;
