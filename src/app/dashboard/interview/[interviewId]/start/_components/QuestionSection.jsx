// "use client"
import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";
import { useSpeech } from "react-text-to-speech";
function QuestionSection({ mockInterviewQuestion, activeQuestionIndex ,setActiveQuetionIndex}) {
  
  const {
    Text, 
    speechStatus, 
    isInQueue, 
    start, 
    pause, 
    stop, 
  } = useSpeech({ text:   mockInterviewQuestion?.interviewQuestions[activeQuestionIndex]
    ?.question  });

  const texttospeech=(ques)=>{
    
      {speechStatus !== "started" ? start() : pause()}
  }
  return (
    mockInterviewQuestion && (
      <div className=" max-sm:mt-5 my-10   bg-zinc-100  border-2  dark:bg-zinc-800  p-10    rounded-xl  font-product   ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5" >
          {mockInterviewQuestion &&
            mockInterviewQuestion.interviewQuestions.map((ques, index) => {
              return (
                <div key={index}>
                  <h2
                    className={` p-2 rounded-full border-2  text-xs md:text-sm text-center cursor-pointer  ${
                      activeQuestionIndex == index ? " bg-[#304ffe] text-white dark:bg-blue-800 hover:bg-blue-800 ":" bg-zinc-200 dark:text-zinc-800"
                    }    `}
                    onClick={()=>{setActiveQuetionIndex(index)}}
                  >
                    Question #{index + 1}
                  </h2>
                </div>
              );
            })}
        </div>
        <h2 className="my-5 text-black text-md md:text-lg dark:text-zinc-200 font-product    ">
          {
            mockInterviewQuestion.interviewQuestions[activeQuestionIndex]
              ?.question
          }
        </h2>
        <Volume2 onClick={()=>{texttospeech(mockInterviewQuestion.interviewQuestions[activeQuestionIndex]
              ?.question)}}/>
        <div className="border mt-2 rounded-lg p-5 bg-blue-100 lg:my-20 sm:my-5 font-product " >
            <h2 className="flex gap-2 items-center max-sm:text-xs  text-blue-800">
                <Lightbulb/>
                <strong>Note: </strong>
               
            </h2>
            <h2 className="text-sm text-blue-800 my-2">
                Click on Record Answer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each of question and your answer to comapre it.
                </h2>
            </div>
            
      </div>
    )
  );
}

export default QuestionSection;
