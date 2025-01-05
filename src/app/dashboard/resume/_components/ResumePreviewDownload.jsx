'use client';
import React, { useContext, useState } from "react";
import { ResumeInfoContext } from "./context/Resumeinfocontext";

function ResumePreviewDownload({data}) {
  const [ resumeinfo, setresumeinfo ] = useState(data);
  console.log(resumeinfo);
  const renderTextWithLineBreaks = (text) => {
    // console.log(text);

    return text
      .split("\n")
      .map((line, index) => <span key={index}>{line}</span>);
  };

  return (
    <div className={`bg-white   text-black w-full `}
   >
      <div
        className={`shadow-lg h-full p-10 border-t-[20px]     `}
        // style={{borderColor:{theme}}}
        style={{borderColor:resumeinfo?.themeColor}}
      >
        <div id="title">
          <h2 className="font-bold text-2xl text-center">
            {resumeinfo?.firstName} {resumeinfo?.lastName}
          </h2>
          {/* <h2 className='text-center text-sm font-semibold '>{resumeinfo?.jobTitle}</h2> */}
          <div className="flex justify-between md:text-sm text-zinc-600 text-xs my-2 underline ">
            <h3>{resumeinfo?.phone}</h3>
            <h3>{resumeinfo?.email}</h3>
            {resumeinfo?.linkedin?.length>1 ? (
              <a href={resumeinfo?.linkedin}>
                {" "}
                <h3>LinkedIn</h3>
              </a>
            ) : null}
            {resumeinfo?.github?.length>1 ? (
              <a href={resumeinfo?.github}>
                {" "}
                <h3>Github</h3>
              </a>
            ) : null}
            {resumeinfo?.portfolio?.length>1 ? (
              <a href={resumeinfo?.portfolio}>
                {" "}
                <h3>Portfolio</h3>
              </a>
            ) : null}
          </div>
        </div>
        <h1 className="w-full h-[2px] bg-zinc-300 mt-5"></h1>
        <div id="summary" className="my-3">
          <div>
            <h1 className="text-md mb-1">SUMMARY</h1>
            <hr></hr>
            <h2 className="text-xs  font-medium text-zinc-700 mt-1">
              {resumeinfo?.summary}
            </h2>
          </div>
        </div>
        <h1 className="w-full h-[2px] bg-zinc-300"></h1>

        <div id="education">
          <div>
            <h1 className="text-md my-1">EDUCATION</h1>
            <hr></hr>
            <h2 className="text-xs  font-medium text-zinc-700 mt-1">
              {resumeinfo?.education?.map((item, index) => (
                <div key={index} className="my-2 flex justify-between ">
                  <div>
                    <h3 className="text-xs font-bold text-zinc-700">
                      {item?.degree}
                    </h3>
                    <h4>
                      {item?.universityName} {item?.grade}
                    </h4>
                  </div>
                  <div className="text-xs  ">
                    <h1 className="italic">
                      {item?.startDate} - {item?.endDate}
                    </h1>
                    <h2 className="text-center italic  ">{item?.location}</h2>
                  </div>
                </div>
              ))}
            </h2>
          </div>
        </div>
        <h1 className="w-full h-[2px] bg-zinc-300 "></h1>

        <div id="skills" >
              <h1 className="text-md my-1 ">SKILLS</h1>
              <hr/>
              <h1 className="text-xs text-zinc-700 my-2 ">{resumeinfo?.skills}</h1>
        </div>
        <h1 className="w-full h-[2px] bg-zinc-300 mb-2"></h1>

        <div id="experience">
          <div>
            <h1 className="text-md my-1">EXPERIENCE</h1>
            <hr></hr>
            <h2 className="text-xs  font-medium text-zinc-700 mt-1">
              {resumeinfo?.experience?.map((item, index) => (
                <div key={index} className="my-1 ">
                  <div className="flex justify-between ">
                    <div>
                      <h3 className="text-xs font-bold text-zinc-700">
                        {item?.title}
                      </h3>
                      <h4>{item?.companyName} </h4>
                    </div>
                    <div className="text-xs ">
                      <h1 className="italic">
                        {item?.startDate} -{" "}
                        {item?.currentlyWorking
                          ? "Currently Working"
                          : item?.endDate}
                      </h1>
                      <h2 className="text-center italic  ">{item?.location}</h2>
                    </div>
                  </div>

                  <div dangerouslySetInnerHTML={{__html:item?.workSummary}}>
              {/* <div>
              {item?.workSummary &&
                      renderTextWithLineBreaks(item?.workSummary)}
              </div> */}


                  </div>
                </div>
              ))}
            </h2>
          </div>
        </div>
        <h1 className="w-full h-[2px] bg-zinc-300"></h1>

        <div id="projects">
          <div>
            <h1 className="text-md my-1">PROJECTS</h1>
            <hr></hr>
            <h2 className="text-xs  font-medium text-zinc-700 mt-1">
              {resumeinfo?.projects?.map((item, index) => (
                <div key={index} className="my-1 ">
                  <div>
                    <h3 className="text-xs font-bold text-zinc-700">
                      {item?.projectName}
                    </h3>
                  <a href={item?.projectLink}>{item?.projectLink}</a>
                  <br/>

                    {item?.projectDescription &&
                      renderTextWithLineBreaks(item?.projectDescription)}
                  </div>
                </div>
              ))}
            </h2>
          </div>
        </div>
        <h1 className="w-full h-[2px] bg-zinc-300"></h1>

        
      </div>
    </div>
  );
}

export default ResumePreviewDownload;
