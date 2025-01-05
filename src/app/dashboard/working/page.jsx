import Link from "next/link";
import React from "react";
import Header from "../_components/Header";

function Working() {
  return (
   <div>
    <Header/>
    <div className="sm:p-5 p-2 font-product mx-5  md:px-20 lg:mx-36 ">
  
      <div className="my-5">
        {/* <h1 className="text-center text-3xl font-bold ">How It Works</h1> */}
        <div className="mx-auto max-w-4xl text-center">
        {/* <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2> */}
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-6xl">
          How It Works?
        </p>
      </div>
        <h2 className="my-2 text-center text-zinc-700 dark:text-white ">
          Welcome to RBU Interviewer, your ultimate solution for realistic,
          interactive interview preparation! Our platform uses cutting-edge AI
          to simulate real-life interviews, assess your performance, and provide
          actionable feedback to help you excel. Here's how it works:
        </h2>
      </div>
      <div>
        <div>
          <h1> <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">1</h3> <h3 className="text-center font-semibold text-2xl">Add an Interview</h3></h1>
          <h2 className="my-2 px-5  text-zinc-700 dark:text-white">
            Start by clicking the “Add Interview” button. This is where you’ll
            set up the framework for your personalized interview session.
          </h2>
          <div>
            <h1 className="px-5 text-xl font-semibold text-zinc-800 dark:text-white">What You’ll Provide</h1>
            <div className="px-5 ">
              <div className="">
                <h1 className="font-semibold text-zinc-700 dark:text-white">1) Position Details:</h1>
                <h2 className="px-5">
                  Enter the role you’re preparing for—whether it’s Software
                  Engineer, Data Scientist, Product Manager, or any other
                  position.
                </h2>
              </div>
              <div>
                <h1 className="font-semibold text-zinc-700 dark:text-white">2) Tech Stack</h1>
                <h2 className="px-5">
                  Specify the technologies or skills relevant to the position,
                  such as Python, React, Kubernetes, or Data Analysis.
                </h2>
              </div>
              <div>
                <h1 className="font-semibold text-zinc-700 dark:text-white">3) Years of Experience</h1>
                <h2 className="px-5">
                  Choose the experience level for the interview: Entry-level,
                  Mid-level, or Senior-level. This helps our AI tailor the
                  questions to your professional stage.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
        <h1> <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">2</h3> <h3 className="text-center font-semibold text-2xl">Generate a Session</h3></h1>
          <h1 className="px-5 my-2 text-zinc-700 dark:text-white">
            Once you provide the details, our powerful AI kicks into action. It
            generates a customized interview session that includes:
          </h1>
          <div className="px-5 ">
            <div>
              <h1 className="font-semibold text-zinc-700 dark:text-white">1) Role-specific Questions: </h1>
              <h2 className="px-5">
                Carefully crafted to test your knowledge, skills, and
                problem-solving abilities in the specified tech stack.
              </h2>
            </div>
            <div>
              <h1 className="font-semibold text-zinc-700 dark:text-white">2) Behavioral Scenarios: </h1>
              <h2 className="px-5">
                Real-life work situations designed to evaluate your
                communication, collaboration, and decision-making skills.
              </h2>
            </div>
            <div>
              <h1 className="font-semibold text-zinc-700 dark:text-white">3) Technical Challenges: </h1>
              <h2 className="px-5">
                Code or problem-solving tasks that simulate the kind of
                challenges you’d face on the job.
              </h2>
            </div>
          </div>
        </div>

        <div>
        <h1> <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">3</h3> <h3 className="text-center font-semibold text-2xl"> Simulate a Real Interview        </h3></h1>
            <h2 className="px-5 my-2 text-zinc-700 dark:text-white">Our AI Interviewer conducts the session, designed to mimic an actual interview as closely as possible:</h2>
            <div className="px-5 ">
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">1) Audio-based Interaction</h1>
                    <h2 className="px-5">Respond to interview questions in real-time using your voice. The platform supports natural conversation flow, ensuring the session feels like a face-to-face interview.</h2>
                </div>
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">2) Real-time Assessment</h1>
                    <h2 className="px-5">As you speak, our AI analyzes your answers, tone, and clarity to ensure a holistic evaluation of both technical and soft skills.</h2>
                </div>
            </div>
        </div>


        <div>
        <h1> <h3 class="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">4</h3> <h3 className="text-center font-semibold text-2xl">Get Comprehensive Feedback</h3></h1>
            <h2 className="px-5 my-2 text-zinc-700 dark:text-white">After the session, our AI generates an in-depth feedback report, including:</h2>
            <div className="px-5">
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">1) Skill Assessment: </h1>
                    <h2 className="px-5">Breakdown of your strengths and weaknesses in technical, analytical, and communication areas.</h2>
                </div>
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">2) Audio Analysis: </h1>
                    <h2 className="px-5">Evaluation of your tone, confidence, and clarity during the conversation.</h2>
                </div>
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">3) Improvement Suggestions: </h1>
                    <h2 className="px-5">Actionable tips and resources to help you improve in weak areas and refine your interview approach.</h2>
                </div>
            </div>
        </div>


        <div>
            <h1 className="text-center font-bold text-2xl mt-5 mb-2 ">Why Choose [AI Interviewer]?</h1>
            <div className="px-5">
            <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">1) Personalized:</h1>
                    <h2 className="px-5">Tailored to your role, skills, and experience level.</h2>
                </div>
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">2) Realistic: </h1>
                    <h2 className="px-5">Simulates real-life scenarios, complete with audio-based interaction.</h2>
                </div>
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white ">3) Actionable:</h1>
                    <h2 className="px-5"> Provides detailed feedback to ensure continuous improvement.</h2>
                </div>
                <div>
                    <h1 className="font-semibold text-zinc-700 dark:text-white">4) Convenient:</h1>
                    <h2 className="px-5">Practice anytime, anywhere, at your own pace</h2>
                </div>
               
            </div>
        </div>

        <div className="my-5">
           {/* <div className=""> */}
           <h1 className="text-center my-2 text-2xl font-bold">
            Ready to Ace Your Next Interview?
            </h1>
            <h2 className="text-center">
            Click <Link href={"/dashboard"}><span className="cursor-pointer font-bold text-indigo-400 hover:text-indigo-600">Get Started</span></Link> to experience the future of interview preparation
            </h2>
           {/* </div> */}
        </div>
      </div>
    </div>
   </div>
  );
}

export default Working;
