// import Image from "next/image";
import Header from "./dashboard/_components/Header";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-2 px-10 sm:px-12 xl:px-52 pt-20 pb-10">
  <div className="text-3xl font-bold">
    <h2 >All-In-One AI</h2>
    <h2 >Interview Platform</h2>
  </div>
  <div>
    <h1>
      Transform your hiring process with cutting-edge AI technology. Our platform delivers personalized, data-driven insights to help you identify the best talent efficiently and effectively.
    </h1>
    <div className="sm:space-x-2 space-y-4 mt-2 max-sm:text-sm">
     <Link href={"/dashboard"}>
     <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 w-32 font-bold">
        <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-indigo-500 opacity-[3%]"></span>
        <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-indigo-500 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-indigo-500 transition-colors duration-200 ease-in-out group-hover:text-white text-center">
          Get Started
        </span>
        <span className="absolute inset-0 rounded-full border-2 border-indigo-500"></span>
      </button></Link>
      
   
     
     <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 bg-indigo-500 text-white font-bold">
     <Link href={"/dashboard/plan"} >  <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
        <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:text-indigo-500 text-center text-white ">
      Explore Features 
        </span>
        <span className="absolute inset-0 rounded-full border-2 border-indigo-500"></span>    </Link>
      </button>
    

    </div>
  </div>
</div>

      <div class="min-w-screen min-h-screen bg-gray-50 dark:bg-[#2b2a2a] flex items-center justify-center py-5">
  <div class="w-full bg-white dark:bg-[#2b2a2a]  border-gray-200 px-5 py-16 md:py-24 text-gray-800">
    <div class="w-full max-w-6xl mx-auto">
      <div class="text-center max-w-xl mx-auto">
        <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600 dark:text-gray-200">
          What users are saying.
        </h1>
        <h3 class="text-xl mb-5 font-light dark:text-gray-300">
          See how AI Interviewer has transformed the hiring experience.
        </h3>
        <div class="text-center mb-10">
          <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
          <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        </div>
      </div>
      <div class="-mx-3 md:flex items-start">
    
        <div class="px-3 md:w-1/3">
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div class="w-full flex mb-4 items-center">
              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
              
                <img src="https://i2.cinestaan.com/image-bank/1500-1500/66001-67000/66782.jpg" className="" alt="" />
              
              </div>
              <div class="flex-grow pl-3">
                <h6 class="font-bold text-sm uppercase text-gray-600">
              Shashi Kapoor
                </h6>
              </div>
            </div>
            <div class="w-full">
              <p class="text-sm leading-tight">
                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                  "
                </span>
                The AI Interviewer revolutionized our hiring process. It quickly identified the best candidates using its advanced analytics and saved us hours of manual reviews.
                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                  "
                </span>
              </p>
            </div>
          </div>
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div class="w-full flex mb-4 items-center">
              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3WVMxepdm4-bkIq3LEn0SS9J8fCUTOustB1401xvU7z7iTaBQ6bhPQI0eKjst8lR6gYhTcuDX2rQPDOv2QfIP195UU6F2ZBUZpNR6x2KXfvzlfOYQ24nA6Cti9yVtSdEvc7XDtiNidED3/s1600/Amitabh2.jpg" alt="" />
              </div>
              <div class="flex-grow pl-3">
                <h6 class="font-bold text-sm uppercase text-gray-600">
                amitabh bachchan
                </h6>
              </div>
            </div>
            <div class="w-full">
              <p class="text-sm leading-tight">
                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                  "
                </span>
                I was amazed by how the AI Interviewer provided unbiased evaluations and personalized feedback for every candidate. A game changer for HR!
                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
       
        <div class="px-3 md:w-1/3">
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div class="w-full flex mb-4 items-center">
              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxQvdzRD7pyX-rsnmmgp4Dz8QOP5y7ZlDKX5leYpj8AiSPvNIS0e2jWV2TpP4Yi8dSOnfYAV-5T5CzUP5C6pcOpXJu8wwlAn7_VAhSMTwEH9g1kXnQExyBrIUr8nLeklA1mDmoVhTcXkP8/s1600/Portrait+of+Hindi+Movie+Star+Dharmendra+in+His+Young+Age.jpg" alt="" />
              </div>
              <div class="flex-grow pl-3">
                <h6 class="font-bold text-sm uppercase text-gray-600">
                  Dharmendra
                </h6>
              </div>
            </div>
            <div class="w-full">
              <p class="text-sm leading-tight">
                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                  "
                </span>
                The mock interviews feature helped me practice for real-life scenarios. I landed my dream job thanks to the detailed analysis it provided.
                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                  "
                </span>
              </p>
            </div>
          </div>
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div class="w-full flex mb-4 items-center">
              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://static.dynamitenews.com/images/2020/12/29/rajesh-khannas-78th-birth-anniversary-iconic-dialogues-of-late-star-that-made-him-immortal/cFBxlVw9Aw0BaAefRwj2641peAEhJQ8zJFzeuDM3.jpeg" alt="" />
              </div>
              <div class="flex-grow pl-3">
                <h6 class="font-bold text-sm uppercase text-gray-600">
                rajesh khanna
                </h6>
              </div>
            </div>
            <div class="w-full">
              <p class="text-sm leading-tight">
                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                  "
                </span>
                Using the AI Interviewer, we reduced hiring biases by 80%. Its automated workflow and interview tracking are simply unmatched.
                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
     
        <div class="px-3 md:w-1/3">
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div class="w-full flex mb-4 items-center">
              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdXTXLvUZWSqUhrqqhLKyR0DqXAdmjY5uJw&s" alt="" />
              </div>
              <div class="flex-grow pl-3">
                <h6 class="font-bold text-sm uppercase text-gray-600">
                kishore kumar
                </h6>
              </div>
            </div>
            <div class="w-full">
              <p class="text-sm leading-tight">
                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                  "
                </span>
                From the AI’s engaging questions to its detailed performance metrics, this tool is every recruiter’s dream.
                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                  "
                </span>
              </p>
            </div>
          </div>
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div class="w-full flex mb-4 items-center">
              <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450" alt="" />
              </div>
              <div class="flex-grow pl-3">
                <h6 class="font-bold text-sm uppercase text-gray-600">
                mohammed rafi
                </h6>
              </div>
            </div>
            <div class="w-full">
              <p class="text-sm leading-tight">
                <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                  "
                </span>
                I appreciate the diversity of interview templates and its focus on skill-based evaluations. Highly recommend for any organization!
                <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
