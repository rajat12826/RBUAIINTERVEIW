"use client";
import supabase from "@/utils/supabaseClients";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState, useRef } from "react";
import { ResumeInfoContext } from "../../_components/context/Resumeinfocontext";
import ResumePreview from "../../_components/ResumePreview";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import "../../../../globals.css";
import { jsPDF } from "jspdf";
import Header from "@/app/dashboard/_components/Header";
import ResumePreviewDownload from "../../_components/ResumePreviewDownload";
import Text from "./_components/Text";
function View({ params }) {
  const { user } = useUser();
  const resumeRef = useRef();

  const [resumeinfo, setresumeinfo] = useState([]);
  const [pro, setpro] = useState([]);
  const [work, setwork] = useState([]);
  const [edu, setedu] = useState([]);
  const resumeid = React.use(params).resumeid;
  console.log(resumeid);
  useEffect(() => {
    // console.log(user);
    const getResumeInfo = async () => {
      const { data, error } = await supabase
        .from("userResume")
        .select()
        .eq("resumeid", resumeid);
      setresumeinfo((prevState) => ({
        ...prevState,
        firstName: data[0].firstName,
        lastName: data[0].lastName,
        email: data[0].email,
        resumeid: data[0].resumeid,
        linkedin: data[0].linkedin,
        portfolio: data[0].portfolio,
        phone: data[0].phone,
        summary: data[0].summary,
        skills: data[0].skills,
        github: data[0].github,
        themeColor: data[0].themeColor,
      }));
    };

    getResumeInfo();

    console.log(resumeinfo);
  }, []);
  useEffect(() => {
    const getResumeProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .eq("resumeid", resumeid);
      console.log(data);

      setresumeinfo((prevState) => ({
        ...prevState,
        projects: data,
      }));
      setpro(data);
    };
    getResumeProject();
  }, []);
  const handleDownload = () => {
    const element = resumeRef.current;
    html2pdf().from(element).save("resume.pdf");
  };

  useEffect(() => {
    const getResumeEducation = async () => {
      const { data, error } = await supabase
        .from("education")
        .select()
        .eq("resumeid", resumeid);
      console.log(data);

      setresumeinfo((prevState) => ({
        ...prevState,
        education: data,
      }));
      setedu(data);
    };
    getResumeEducation();
  }, []);
  useEffect(() => {
    const getResumeExp = async () => {
      const { data, error } = await supabase
        .from("experience")
        .select()
        .eq("resumeid", resumeid);
      console.log(data);

      setresumeinfo((prevState) => ({
        ...prevState,
        experience: data,
      }));
      setwork(data);
    };
    getResumeExp();
  }, []);
  const download = () => {
    window.print();
  };
  const handlePrint = () => {
    const printWindow = window.open("", "", "height=900,width=1200");

    const content = resumeRef.current.innerHTML;

    printWindow.document.write(`
          <html>
            <head>
              <title>Print Resume</title>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              <style>
              @media print {
  /* Hide all content except for the print area */
  #no-print {
    display: none !important;
  }

  #print {
    display: block !important;   /* Make sure print area is visible */
    width: 100%;
    padding: 0;  /* Remove any padding */
    margin: 0;   /* Remove any margin */
    box-sizing: border-box;   /* Ensures all content stays inside the boundaries */
  }

  body {
    margin: 0;   /* Remove body margins */
    padding: 0;  /* Remove body padding */
    box-shadow: none;  /* Remove box-shadow if there's any */
  }

  /* Remove any extra margins or paddings around the content */
  /* #resume-preview, #resume-preview * {
    margin: 0;
    /* padding: 0; */
  /* }  */

  /* Add any additional style to format the content properly */
  #print {
    font-family: Arial, sans-serif;
    color: #333;  /* Adjust text color */
    line-height: 1.5;  /* Set line height */
  }
}

/* General page settings */
@page {
  size: auto;   /* Automatically adjust page size */
  margin: 0;     /* Remove page margins */
}

/* Ensures no extra margins or padding in the print version */
#resume-preview {
  margin: 0 !important;
  /* padding: 0 !important; */
}

/* Other potential classes that might be adding space */



@page{
  size:auto;
  margin:0mm;
}
              </style>
            </head>
            <body>
              <div id="print" class="p-8 max-w-4xl mx-auto">
                ${content}
              </div>
            </body>
          </html>
        `);

    const doc = new jsPDF();

    doc.html(printWindow, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      x: 10,
      y: 10,
    });
  };
  const handleDownloadHTML = () => {
    const content = resumeRef.current.innerHTML;

    const htmlContent = `
          <html>
            <head>
              <title>Resume</title>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              <style>
                @media print {
                  /* Hide all content except for the print area */
                  #no-print {
                    display: none !important;
                  }
    
                  #print {
                    display: block !important; /* Make sure print area is visible */
                    width: 100%;
                    padding: 0; /* Remove any padding */
                    margin: 0; /* Remove any margin */
                    box-sizing: border-box; /* Ensures all content stays inside the boundaries */
                  }
    
                  body {
                    margin: 0; /* Remove body margins */
                    padding: 0; /* Remove body padding */
                    box-shadow: none; /* Remove box-shadow if there's any */
                  }
    
                  /* Styling for print version */
                  #print {
                    font-family: Arial, sans-serif;
                    color: #333; /* Adjust text color */
                    line-height: 1.5; /* Set line height */
                  }
                }
    
                /* General page settings */
                @page {
                  size: auto; /* Automatically adjust page size */
                  margin: 0; /* Remove page margins */
                }
    
                #print {
                  font-family: Arial, sans-serif;
                  color: #333;
                  line-height: 1.5;
                }
              </style>
            </head>
            <body>
              <div id="print" class=" max-w-4xl mx-auto">
                ${content}
              </div>
            </body>
          </html>
        `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const options = {
      margin: 0,
      padding:0,
            filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(htmlContent).set(options).save();
  };

  return (
    //    <div>

    <ResumeInfoContext.Provider value={{ resumeinfo, setresumeinfo }}>
      {/* <div> */}
      <div id="no-print">
        <Header />
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <Text />

          <div className="flex justify-between  my-10">
            {/* <Button onClick={download}>Print</Button> */}
            {/* <Button onClick={handleDownloadHTML}>Download</Button> */}
            <button  onClick={download} class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-400 hover:ring-offset-red-500 ease focus:outline-none">
              <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="relative z-20 flex items-center text-sm">
                <svg
                  class="relative w-5 h-5 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
               Print
              </span>
            </button>
            <button onClick={handleDownloadHTML} class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-green-300 ring-offset-green-400 hover:ring-offset-green-500 ease focus:outline-none">
              <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="relative z-20 flex items-center text-sm">
                <svg
                  class="relative w-5 h-5 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
               Download
              </span>
            </button>
          </div>
        </div>
      </div>
      <div id="print" ref={resumeRef}>
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
    //    </div>
  );
}

export default View;
