import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function InterviewCard({ interview }) {
  const router = useRouter();

 
  const navigateTo = (path) => {
    router.push(path);
  };

  // Format the date and time
  const formattedDate = new Date(interview?.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = new Date(interview?.created_at).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="border shadow-sm rounded-lg p-5 dark:bg-white hover:scale-105 transition-transform">
      <h2 className="font-bold text-indigo-800">{interview?.jobposition?.toUpperCase()}</h2>
      <h3 className="text-sm text-zinc-500">{interview?.jobExperience} Year(s) of Experience</h3>
      <p className="text-xs text-zinc-500 sm:text-sm">
        Created At: {formattedDate} {formattedTime}
      </p>
      <div className="flex justify-between mt-2 gap-5 ">
        <Button
          onClick={() => navigateTo(`/dashboard/interview/${interview?.mockId}/feedback`)}
          className="w-20 bg-[#ff1744] hover:bg-[#e60532] dark:text-white font-medium"
        >
          Feedback
        </Button>
        <Button
       
          onClick={() => navigateTo(`/dashboard/interview/${interview?.mockId}`)}
          className="w-20 bg-indigo-600 hover:bg-indigo-500 dark:text-white font-medium"
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewCard;
