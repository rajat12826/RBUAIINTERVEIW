import React, { useContext } from "react";
import { ResumeInfoContext } from "./context/Resumeinfocontext";

function ResumePreview() {
  const { resumeinfo, setresumeinfo } = useContext(ResumeInfoContext);
  console.log(resumeinfo);
  const renderTextWithLineBreaks = (text) => {
    // console.log(text);

    return text
      .split("\n")
      .map((line, index) => <span key={index}>{line}</span>);
  };

  return (
    <div id="resume-preview" className="lg:p-10">
    <div className="bg-white text-black w-full">
      <div
        className="shadow-lg h-full p-10 border-t-[20px]"
        style={{ borderColor: resumeinfo?.themeColor }}
      >
        <div id="title" className="mb-5">
          <h2 className="font-bold text-2xl text-center">
            {resumeinfo?.firstName} {resumeinfo?.lastName}
          </h2>
          <div className="max-sm:text-xs flex justify-between md:text-sm text-zinc-600 text-sm mt-2 underline">
            <h3>{resumeinfo?.phone}</h3>
            <h3>{resumeinfo?.email}</h3>
            {resumeinfo?.linkedin?.length > 1 && (
              <a href={resumeinfo?.linkedin}>
                <h3>LinkedIn</h3>
              </a>
            )}
            {resumeinfo?.github?.length > 1 && (
              <a href={resumeinfo?.github}>
                <h3>Github</h3>
              </a>
            )}
            {resumeinfo?.portfolio?.length > 1 && (
              <a href={resumeinfo?.portfolio}>
                <h3>Portfolio</h3>
              </a>
            )}
          </div>
        </div>
  
        {/* Horizontal Line */}
        <hr className="w-full h-[2px] bg-zinc-300 my-4" />
  
        <div id="summary" className="my-5">
          <h1 className="text-md mb-2 font-semibold">SUMMARY</h1>
          <hr className="my-2" />
          <h2 className="text-sm font-medium text-zinc-700 mt-1">{resumeinfo?.summary}</h2>
        </div>
  
        {/* Horizontal Line */}
        <hr className="w-full h-[2px] bg-zinc-300 my-4" />
  
        <div id="education" className="my-5">
          <h1 className="text-md mb-2 font-semibold">EDUCATION</h1>
          <hr className="my-2" />
          {resumeinfo?.education?.map((item, index) => (
            <div key={index} className="my-3 flex justify-between">
              <div>
                <h3 className="text-sm font-bold text-zinc-700">{item?.degree}</h3>
                <h4>{item?.universityName} - {item?.grade}</h4>
              </div>
              <div className="text-sm">
                <h1 className="italic">{item?.startDate} - {item?.endDate}</h1>
                <h2 className="text-center italic">{item?.location}</h2>
              </div>
            </div>
          ))}
        </div>
  
        {/* Horizontal Line */}
        <hr className="w-full h-[2px] bg-zinc-300 my-4" />
  
        <div id="skills" className="my-5">
          <h1 className="text-md mb-2 font-semibold">SKILLS</h1>
          <hr className="my-2" />
          <h1 className="text-sm text-zinc-700">{resumeinfo?.skills}</h1>
        </div>
  
        {/* Horizontal Line */}
        <hr className="w-full h-[2px] bg-zinc-300 my-4" />
  
        <div id="experience" className="my-5">
          <h1 className="text-md mb-2 font-semibold">EXPERIENCE</h1>
          <hr className="my-2" />
          {resumeinfo?.experience?.map((item, index) => (
            <div key={index} className="my-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-700">{item?.title}</h3>
                  <h4>{item?.companyName}</h4>
                </div>
                <div className="text-sm">
                  <h1 className="italic">
                    {item?.startDate} - {item?.currentlyWorking ? "Currently Working" : item?.endDate}
                  </h1>
                  <h2 className="text-center italic">{item?.location}</h2>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: item?.workSummary }} />
            </div>
          ))}
        </div>
  
        {/* Horizontal Line */}
        <hr className="w-full h-[2px] bg-zinc-300 my-4" />
  
        <div id="projects" className="my-5">
          <h1 className="text-md mb-2 font-semibold">PROJECTS</h1>
          <hr className="my-2" />
          {resumeinfo?.projects?.map((item, index) => (
            <div key={index} className="my-3">
              <div>
                <h3 className="text-sm font-bold text-zinc-700">{item?.projectName}</h3>
                <a href={item?.projectLink} className="text-blue-600">{item?.projectLink}</a>
                <br />
                {item?.projectDescription && (
                  <p className="text-sm text-zinc-700 mt-2">{item?.projectDescription}</p>
                )}
              </div>
            </div>
          ))}
        </div>
  
        
        <hr className="w-full h-[2px] bg-zinc-300 my-4" />
      </div>
    </div>
  </div>
  
  
  );
}

export default ResumePreview;
