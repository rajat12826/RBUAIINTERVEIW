"use client";
import ToggleButton from "@/app/Toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

function Header() {
  const path = usePathname();
  useEffect(() => {
    // console.log(path);
  });
  return (
    <div className="flex justify-between p-5 bg-zinc-100 rounded-b-xl shadow-md dark:bg-zinc-800  ">
      <div className="grid grid-cols-1">
   <div className="flex">
   <svg fill="#6366f1" className="bg-whit  " width="120px" height="30px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"/>

</g>
{/* <text x="320" y="50" font-size="24" className="text-blue-500" text-anchor="middle" fill="#4f46e5">Your Text Here</text> */}
</svg>
{/* <h1 className=" text-center flex justify-center items-center ">AI-Interviewer</h1> */}
   </div>
      </div>

      <ul className=" hidden sm:flex space-x-3 items-center cursor-pointer">
        <Link href={"/dashboard"}>
          {" "}
          <li
            className={`text-center  hover:text-[#304ffe] hover:font-bold hover:dark:text-white hover:shadow-2xl ${
              path == "/dashboard"
                ? " text-indigo-500 dark:text-indigo-500 font-bold"
                : ""
            }`}
          >
            Dashboard
          </li>
        </Link>
        <li
          className={`text-center  hover:text-[#304ffe] hover:font-bold hover:dark:text-white hover:shadow-2xl ${
            path == "/dashboard/interview" && "text-[#304ffe] font-bold"
          }`}
        >
          Questions
        </li>
        <Link href={"/dashboard/plan"}>
          <li
            className={`text-center  hover:text-[#304ffe] hover:font-bold hover:dark:text-white hover:shadow-2xl ${
              path == "/dashboard/plan" &&
              "text-indigo-500 dark:text-indigo-500 font-bold"
            }`}
          >
            Upgrade
          </li>
        </Link>
        <Link href={"/dashboard/working"}>
        <li
          className={`text-center  hover:text-[#304ffe] hover:font-bold hover:dark:text-white hover:shadow-2xl ${
            path == "/dashboard/working" && "text-indigo-500 dark:text-indigo-500 font-bold"
          }`}
        >
          How It Works?
        </li></Link>
      </ul>

      <div className="flex space-x-3">
        <div className="flex justify-center ">
          <UserButton />
        </div>
        <div className="flex justify-center items-center ">
          <div className="sm:hidden mr-5 ">
            <Sidebar />
          </div>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
