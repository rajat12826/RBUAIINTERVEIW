"use client";
import React, { act, useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "./context/Resumeinfocontext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid, LoaderCircle } from "lucide-react";
import supabase from "@/utils/supabaseClients";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import RichTextEditor from "./RichTextEditor";
import { useRouter } from "next/navigation";
// import { tab } from "@material-tailwind/react";

function Formsection({ resumeid,education,work,pro}) {
  // console.log(pro);
  const router = useRouter();
  const [workexp, setworkexp] = useState(work||[])
  const [edu, setedu] = useState(education||[]);
  const [project, setproject] = useState(pro || []);

  useEffect(() => {
    setproject(pro || []); 
  }, [pro]);
  useEffect(() => {
    setworkexp(work || []); 
  }, [work]);
  useEffect(() => {
    setedu(education || []); 
  }, [education]);
  const [opentheme, setopentheme] = useState(false);
  const options = { year: "numeric", month: "short" };
  console.log(resumeid);
  const formfield = {
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: "",
    title: "",
    workSummary: "",
    index: "",
    resumeid: "",
  };
  const edufield = {
    universityName: "",
    startDate: "",
    endDate: "",
    degree: "",
    grade: "",
    location: "",
    index: "",
    resumeid: "",
  };
  
  const projectfield={
    projectName: "",
    projectDescription:'',
    projectLink:'',
    resumeid:''

  }
  
  const handleExpchange = (index, event) => {
    const newformfield = workexp.slice();
    const { name, value } = event.target;
    if (name == "startDate" || name == "endDate") {
      newformfield[index][name] = new Date(value).toLocaleDateString(
        "en-US",
        options
      );
    } else {
      newformfield[index][name] = value;
    }
    newformfield[index]["resumeid"] = resumeid;
    newformfield[index]["index"] = index;
    setworkexp(newformfield);
    console.log(workexp);
  };
  const handleWorkchange = (index, event) => {
    const newformfield = edu.slice();
    const { name, value } = event.target;
    if (name == "startDate" || name == "endDate") {
      newformfield[index][name] = new Date(value).toLocaleDateString(
        "en-US",
        options
      );
    } else {
      newformfield[index][name] = value;
    }
    newformfield[index]["index"] = index;
    newformfield[index]["resumeid"] = resumeid;
    setedu(newformfield);

    console.log(edu);
  };
  const handleProjectchange = (index, event) => {
    const newformfield =project.slice();
    const { name, value } = event.target;
  
      newformfield[index][name] = value;
    
    newformfield[index]["index"] = index;
    newformfield[index]["resumeid"] = resumeid;
    setproject(newformfield);

    console.log(project);
  };
  const addexp = () => {
    setworkexp((prev) => [...prev, formfield]);
  };
  const removeexp = () => {
    setworkexp((prev) => prev.slice(0, -1));
  };
  const addedu = () => {
    setedu((prev) => [...prev, edufield]);
  };
  const removeedu = () => {
    setedu((prev) => prev.slice(0, -1));
  };
  const addproject = () => {
    setproject((prev) => [...prev, projectfield]);
  };
  const removeproject = () => {
    setproject((prev) => prev.slice(0, -1));
  };
  const handleRichTextEditor = (e, name, index) => {
    const newformfield = workexp.slice();
    newformfield[index][name] = e.target.value;
    setworkexp(newformfield);
    console.log(workexp);
  };
  const setrichtext=(val, name, index)=>{
    const newformfield = workexp.slice();
    newformfield[index][name] = val;
    setworkexp(newformfield);
    console.log(workexp); 
  }
  useEffect(() => {
    setresumeinfo({
      ...resumeinfo,
      experience: workexp,
    });
  }, [workexp]);
  useEffect(() => {
    setresumeinfo({
      ...resumeinfo,
      education: edu,
    });
  }, [edu]);
  useEffect(() => {
    setresumeinfo({
      ...resumeinfo,
      projects: project,
    });
  }, [project]);
  const [data, setdata] = useState(null);
  useEffect(() => {
    getUser();
    async function getUser() {
      const { data, error } = await supabase
        .from("userResume")
        .select()
        .eq("resumeid", resumeid);
      if (data) {
        setdata(data[0]);
      }

      console.log(data);
    }
  }, []);
  const { resumeinfo, setresumeinfo } = useContext(ResumeInfoContext);
  console.log(resumeinfo?.firstName);
  const [summary, setsummary] = useState(null);
  const [activeformindex, setactiveformindex] = useState(1);
  const [enableNext, setEnablenext] = useState(false);
  const [formdata, setformdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [ailoading, setailoading] = useState(false);
  const handleInputChanges = (e) => {
    setEnablenext(false);
    const { name, value } = e.target;
    setformdata((prevstate) => ({ ...prevstate, [name]: value }));
    setresumeinfo((prevstate) => ({ ...prevstate, [name]: value }));
  };
  const generateAIProjectSum=async(index)=>{
    setailoading(true);
    const inputPrompt = `Based on the provided project name and required skills, skills=${resumeinfo?.skills} projectName=${project[index]?.projectName} generate a detailed project description that outlines the purpose, goals, key deliverables, timeline, and required expertise. The description should also highlight the potential impact or value the project will bring to the target audience or organization. Please ensure the description is clear, concise, and tailored to someone looking to understand the core objectives and requirements of the project. Give "summary"  as field in JSON `;
    const result = await chatSession.sendMessage(inputPrompt);
    const mockresponse = JSON.parse(result.response.text());
    console.log(mockresponse);
    const updatedProject = [...project];  // Create a shallow copy of the project array
    updatedProject[index] = {
        ...updatedProject[index],  // Keep the existing properties of the project
        projectDescription: mockresponse.summary,  // Update only the projectDescription
    };
    setproject(updatedProject);
    console.log(mockresponse?.summary);
    setailoading(false);
   
    if (mockresponse) {
      toast("Summary Generated Successfully!!");
    }
  }
  const generateAISummary = async () => {
    setailoading(true);
    const inputPrompt = `Generate a concise and professional summary for the role of ${data?.title} . The summary should highlight the key skills, qualifications, and experience that a strong candidate for this role would typically possess. Focus on the strengths and attributes that make someone highly qualified for this position, emphasizing their suitability for the job and their ability to contribute effectively in the role. Give "summary"  as field in JSON `;
    const result = await chatSession.sendMessage(inputPrompt);
    const mockresponse = JSON.parse(result.response.text());
    console.log(mockresponse);

    console.log(mockresponse?.summary);
    setailoading(false);
    setsummary(mockresponse?.summary);
    setformdata((prevstate) => ({ ...prevstate,summary:mockresponse?.summary }));
    setresumeinfo({...resumeinfo,summary:mockresponse?.summary})
    if (mockresponse) {
      toast("Summary Generated Successfully!!");
    }
  };

  const onSaveArrayedu = async (index) => {
    setloading(true);
    // setEnablenext(true);
    const { data: d, error: e } = await supabase
      .from("education")
      .select()
      .eq("resumeid", resumeid)
      .eq("index", index);
    console.log(d);

    if (d.length == 0) {
      const { data, error } = await supabase
        .from("education")
        .insert(edu[index])

        .select();
      console.log(data + "dejnd");

      if (data) {
        toast("Education Added Successfully!!");
      }
    } else {
      const { data, error } = await supabase
        .from("education")
        .update(edu[index])
        .eq("resumeid", resumeid)
        .eq("index", index)
        .select();
      if (data) {
        toast("Education Added Successfully!!");
      }
    }
    setloading(false);
  };

  const onSaveArray = async (index) => {
    setloading(true);
    // setEnablenext(true);
    const { data: d, error: e } = await supabase
      .from("experience")
      .select()
      .eq("resumeid", resumeid)
      .eq("index", index);
    console.log(d);

    if (d.length == 0) {
      const { data, error } = await supabase
        .from("experience")
        .insert(workexp[index])

        .select();
      console.log(data + "dejnd");

      if (data) {
        toast("Experience Added Successfully!!");
      }
    } else {
      const { data, error } = await supabase
        .from("experience")
        .update(workexp[index])
        .eq("resumeid", resumeid)
        .eq("index", index)
        .select();
      if (data) {
        toast("Experience Added Successfully!!");
      }
    }
    setloading(false);
  };

  const onSaveArrayProject = async (index) => {
    setloading(true);
    // setEnablenext(true);
    const { data: d, error: e } = await supabase
      .from("projects")
      .select()
      .eq("resumeid", resumeid)
      .eq("index", index);
    console.log(d);

    if (d.length == 0) {
      const { data, error } = await supabase
        .from("projects")
        .insert(project[index])

        .select();
      console.log(data + "dejnd");

      if (data) {
        toast("Project Added Successfully!!");
      }
    } else {
      const { data, error } = await supabase
        .from("projects")
        .update(project[index])
        .eq("resumeid", resumeid)
        .eq("index", index)
        .select();
      if (data) {
        toast("Project Added Successfully!!");
      }
    }
    setloading(false);
  };
const onSavecolor=async(e)=>{
  const { data, error } = await supabase
      .from("userResume")
      .update({ themeColor: e.target.value })
      .eq("resumeid", resumeid)

      .select();
    if (data) {
      toast("Colour saved successfully!!");
    }
}
  const onSavetitle = async (e) => {
    e.preventDefault();
    setloading(true);
    setEnablenext(true);
    console.log(formdata);

    const { data, error } = await supabase
      .from("userResume")
      .update(formdata)
      .eq("resumeid", resumeid)

      .select();
    if (data) {
      toast("Data saved successfully!!");
    }
    setloading(false);
  };
  return (
    <div className="p-10">
      <div className="flex justify-between items-center md:text-sm  ">
        <div className="flex">
          <Button variant="outline" size="sm" className="relative">
            <LayoutGrid /> Theme
            <input
              type="color"
              className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
              onChange={(e) => {
                setresumeinfo({ ...resumeinfo, themeColor: e.target.value }
                  
                );
                onSavecolor(e)
              }}
            />
          </Button>
        </div>
        <div className="flex gap-2 ">
          {activeformindex > 1 && (
            <Button
              size="sm"
              className="bg-[#ff1744] dark:text-white hover:bg-red-500"
              onClick={() => setactiveformindex(activeformindex - 1)}
            >
              <ArrowLeft />
              Prev
            </Button>
          )}
          <Button
            // disabled={activeformindex == 6}
            className="flex gap-2 bg-green-600 dark:text-white hover:bg-green-500"
            size="sm"
            onClick={() => {
              if(activeformindex==6){
                router.push(`/dashboard/resume/${resumeid}/view`);
              }
              else{
                setactiveformindex(activeformindex + 1)
              }
            }}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {activeformindex == 1 ? (
        <div
          id="titlef"
          className="p-5 shadow-lg rounded-lg border-t-pink-500 border-2"
        >
          <h2 className="font-bold text-lg">Peronal Detail</h2>
          <p>Get Started with the basic information</p>
          <form onSubmit={onSavetitle}>
            <div className="grid grid-cols-2 mt-5 gap-3">
              <div>
                <label className="text-sm"> First Name</label>
                <Input
                  className="border-2  border-zinc-500  "
                  name="firstName"
                  required
                  defaultValue={resumeinfo?.firstName}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label className="text-sm"> Last Name</label>
                <Input
                  className="border-2 border-zinc-500 "
                  name="lastName"
                  required
                  defaultValue={resumeinfo?.lastName}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label className="text-sm cols-span-2"> Mobile Number</label>
                <Input
                  className="border-2 border-zinc-500 "
                  name="phone"
                  required
                  defaultValue={resumeinfo?.phone}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label className="text-sm cols-span-2">Email</label>
                <Input
                  className="border-2 border-zinc-500 "
                  name="email"
                  required
                  defaultValue={resumeinfo?.email}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label className="text-sm cols-span-2">LinkedIn</label>
                <Input
                  className="border-2 border-zinc-500 "
                  name="linkedin"
                  required
                  defaultValue={resumeinfo?.linkedin}
                  onChange={handleInputChanges}
                />
              </div>
              <div>
                <label className="text-sm cols-span-2">Github</label>
                <Input
                  className="border-2 border-zinc-500 "
                  name="github"
                  required
                  defaultValue={resumeinfo?.github}
                  onChange={handleInputChanges}
                />
              </div>
              <div className="col-span-2 ">
                <label className="text-sm cols-span-2">Portfolio</label>
                <Input
                  className="border-2 border-zinc-500 "
                  name="portfolio"
                  required
                  defaultValue={resumeinfo?.portfolio}
                  onChange={handleInputChanges}
                />
              </div>
            </div>
            <div className="mt-3 flex  justify-end ">
              <Button type="submit" className="bg-indigo-600 dark:text-white w-28 hover:bg-[#2962ff]" disabled={loading}>
                {loading ? <LoaderCircle>Saving</LoaderCircle> : "Save"}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {activeformindex == 2 ? (
        <div className="p-5 my-2 shadow-lg rounded-lg border-t-pink-500 border-2">
          <div className="">
            <h2 className="font-bold text-lg">Summary</h2>
            <p>Add Summary For Your Job Role</p>
          </div>
          <form onSubmit={onSavetitle} className="">
            <div className="flex justify-between my-5  ">
              <label className="text-md"> Add Summary</label>

              <button
                type="button"
                disabled={ailoading}
                onClick={generateAISummary}
                class="flex items-center text-xs bg-white h-10  border text-black font-bold py-2 pr-5 rounded"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIS_GMENyqoWukYofDbpdwLZQoI5s0DmQiw&s"
                  alt="Button Icon"
                  width="30"
                  height="15"
                  class={`${ailoading ? " animate-spin ml-2" : ""} `}
                />
                Open AI
              </button>
            </div>
            <Textarea
              name="summary"
              required
              defaultValue={summary ? summary : resumeinfo?.summary}
              className="border-2  border-zinc-500  "
              onChange={handleInputChanges}
            />
            <div className="mt-3 flex justify-end ">
              <Button type="submit" disabled={loading} className="bg-indigo-600 dark:text-white w-28 hover:bg-[#2962ff]">
                {loading ? (
                  <LoaderCircle className="animate-spin">Saving</LoaderCircle>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {activeformindex == 4 ? (
        <div className="p-5 my-2 shadow-lg rounded-lg border-t-pink-500 border-2">
          <div className="">
            <h2 className="font-bold text-lg">Experience</h2>
            <p>Add Experience</p>
          </div>
          <form>
            {workexp.map((item, index) => (
              <div key={index} className="grid grid-cols-2 mt-5 gap-3">
                <div>
                  <label className="text-sm cols-span-2">Position Title</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="title"
                    required
                    
                    defaultValue={resumeinfo?.experience[index]?.title}
                    onChange={(e) => handleExpchange(index, e)}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Company Name</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="companyName"
                    required
                    defaultValue={resumeinfo?.experience[index]?.companyName}
                    onChange={(e) => handleExpchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Location</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="location"
                    required
                    defaultValue={resumeinfo?.experience[index]?.location}
                    onChange={(e) => handleExpchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">
                    Currrently Working
                  </label>
                  <Input
                    type="boolean"
                    className="border-2 border-zinc-500 "
                    name="currentlyWorking"
                    // required
                    defaultValue={resumeinfo?.experience[index]?.currentlyWorking}
                    onChange={(e) => handleExpchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Start Date</label>
                  <Input
                    type="date"
                    className="border-2 border-zinc-500 "
                    name="startDate"
                    required
                    // defaultValue={item?.startDate}
                    onChange={(e) => handleExpchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">End Date</label>
                  <Input
                    type="date"
                    className="border-2 border-zinc-500 "
                    name="endDate"
                    // required
                    onChange={(e) => handleExpchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div className="col-span-2 ">
                  <RichTextEditor
                    onRichTextEdtitorChange={(e) => {
                      handleRichTextEditor(e, "workSummary", index);
                    }}
                    onrichval={(val)=>{
                  setrichtext(val,"workSummary",index)
                    }}
                    workexp={workexp[index]}
                    val={resumeinfo?.experience[index]?.workSummary}
                  />
                </div>
                <Button
                  type="button"
                  disabled={loading}
                   className="bg-[#2962ff] dark:text-white hover:bg-[#2979ff] w-48"
                  onClick={() => {
                    onSaveArray(index);
                  }}
                >
                  {loading ? <LoaderCircle>Saving</LoaderCircle> : "Save each"}
                </Button>
              </div>
            ))}
            <div className="mt-3 flex justify-between">
              <div className="flex gap-8">
                <Button type="button" onClick={addexp} className="bg-green-600 dark:text-white hover:bg-green-500" size="sm">
                  Add New Experience
                </Button>
                {workexp.length > 1 ? (
                  <Button type="button" size="sm" className="bg-red-600 dark:text-white hover:bg-red-500" onClick={removeexp}>
                    Remove Experience
                  </Button>
                ) : null}
              </div>

              <Button type="submit" disabled={loading} className="bg-indigo-600 dark:text-white w-28 hover:bg-[#2962ff]" size="sm">
                {loading ? (
                  <LoaderCircle className="animate-spin">Saving</LoaderCircle>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {activeformindex == 3 ? (
        <div className="p-5 my-2 shadow-lg rounded-lg border-t-pink-500 border-2">
          <div className="">
            <h2 className="font-bold text-lg">Education</h2>
            <p>Add Education</p>
          </div>
          <form>
            {edu.map((item, index) => (
              <div key={index} className="grid grid-cols-2 mt-5 gap-3">
                <div>
                  <label className="text-sm cols-span-2">University Name</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="universityName"
                    required
                    defaultValue={resumeinfo?.education[index]?.universityName}
                    onChange={(e) => handleWorkchange(index, e)}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Location</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="location"
                    required
                    defaultValue={resumeinfo?.education[index]?.location}
                    onChange={(e) => handleWorkchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Degree</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="degree"
                    required
                    defaultValue={resumeinfo?.education[index]?.degree}
                    onChange={(e) => handleWorkchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Grade</label>
                  <Input
                    type="text"
                    className="border-2 border-zinc-500 "
                    name="grade"
                    // required
                    defaultValue={resumeinfo?.education[index]?.grade}
                    onChange={(e) => handleWorkchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Start Date</label>
                  <Input
                    type="date"
                    className="border-2 border-zinc-500 "
                    name="startDate"
                    required
                    onChange={(e) => handleWorkchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">End Date</label>
                  <Input
                    type="date"
                    className="border-2 border-zinc-500 "
                    name="endDate"
                    // required
                    onChange={(e) => handleWorkchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                {/* <div className="col-span-2 ">
              <RichTextEditor onRichTextEdtitorChange={(e)=>{handleRichTextEditor(e,"workSummary",index)}} workexp={workexp[index]}/>
              </div> */}
                <Button
                  type="button"
                  disabled={loading}
                  className="bg-[#2962ff] dark:text-white  hover:bg-[#2979ff] w-48"
                  onClick={() => {
                    onSaveArrayedu(index);
                  }}
                >
                  {loading ? <LoaderCircle className="animate-spin text-white ">Saving</LoaderCircle> : "Save each"}
                 
                </Button>
                
    
 
    
              </div>
            ))}
            <div className="mt-3 flex justify-between">
              <div className="flex gap-8">
                <Button type="button" className="dark:text-white bg-green-600 hover:bg-green-500" onClick={addedu} size="sm">
                  Add New Education
                </Button>
                {edu.length > 1 ? (
                  <Button type="button" size="sm" className="dark:text-white bg-red-600 hover:bg-red-500" onClick={removeedu}>
                    Remove Education
                  </Button>
                ) : null}
              </div>
              <Button type="submit" disabled={loading} className="dark:text-white bg-indigo-600 w-28 hover:bg-[#2962ff]"  size="sm">
                {loading ? (
                  <LoaderCircle className="animate-spin">Saving</LoaderCircle>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {activeformindex == 5 ? (
        <div className="p-5 my-2 shadow-lg rounded-lg border-t-pink-500 border-2">
          <div className="">
            <h2 className="font-bold text-lg">Projects</h2>
            <p>Add Projects</p>
          </div>
          <form>
            {project.map((item, index) => (
              <div key={index} className="grid grid-cols-2 mt-5 gap-3">
                <div>
                  <label className="text-sm cols-span-2">Project Name</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="projectName"
                    required
                    defaultValue={resumeinfo?.projects[index]?.projectName}
                    onChange={(e) => handleProjectchange(index, e)}
                  />
                </div>
                <div>
                  <label className="text-sm cols-span-2">Project Link</label>
                  <Input
                    className="border-2 border-zinc-500 "
                    name="projectLink"
                    required
                    defaultValue={resumeinfo?.projects[index]?.projectLink}
                    onChange={(e) => handleProjectchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
                <div className="flex justify-between my-5 col-span-2  ">
              <label className="text-md"> Add project Description</label>

              <button
                type="button"
                disabled={ailoading}
                onClick={()=>{generateAIProjectSum(index)}}
                class="flex items-center text-xs bg-white h-10  border text-black font-bold py-2 pr-5 rounded"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIS_GMENyqoWukYofDbpdwLZQoI5s0DmQiw&s"
                  alt="Button Icon"
                  width="30"
                  height="15"
                  class={`${ailoading ? " animate-spin ml-2" : ""} `}
                />
                Open AI
              </button>
            </div>
                <div className="col-span-2">
                  <label className="text-sm cols-span-2">Project Description</label>
                  <Textarea
                    className="border-2 border-zinc-500 "
                    name="projectDescription"
                    required
                    defaultValue={resumeinfo?.projects[index]?.projectDescription}
                    onChange={(e) => handleProjectchange(index, e)}
                    // defaultValue={resumeinfo?.github}
                  />
                </div>
             
                
                {/* <div className="col-span-2 ">
              <RichTextEditor onRichTextEdtitorChange={(e)=>{handleRichTextEditor(e,"workSummary",index)}} workexp={workexp[index]}/>
              </div> */}
                <Button
                  type="button"
                  disabled={loading}
                   className="bg-[#2962ff] dark:text-white hover:bg-[#2979ff] w-48"
                  onClick={() => {
                    onSaveArrayProject(index);
                  }}
                >
                  {loading ? <LoaderCircle>Saving</LoaderCircle> : "Save each"}
                </Button>
              </div>
            ))}
            <div className="mt-3 flex justify-between">
              <div className="flex gap-8">
                <Button type="button" onClick={addproject} className="bg-green-600 dark:text-white hover:bg-green-500" size="sm">
                  Add New Project
                </Button>
                {project.length > 1 ? (
                  <Button type="button" size="sm" className="bg-red-600 dark:text-white hover:bg-red-500" onClick={removeproject}>
                    Remove Project
                  </Button>
                ) : null}
              </div>
              <Button type="submit" disabled={loading} className="bg-indigo-600 w-28 dark:text-white hover:bg-[#2962ff]" size="sm">
                {loading ? (
                  <LoaderCircle className="animate-spin">Saving</LoaderCircle>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {activeformindex == 6 ? (
        <div>
          <div className="p-5 my-2 shadow-lg rounded-lg border-t-pink-500 border-2">
            <div className="">
              <h2 className="font-bold text-xl">Skills</h2>
              <p>Add Skill</p>
              <form onSubmit={onSavetitle}>
                <Input
                  type="text"
                  className="border-2 border-zinc-500 "
                  name="skills"
                  // required
                  onChange={handleInputChanges}
                  defaultValue={resumeinfo?.skills}
                />
                <div className="mt-3  flex justify-end "
               >
                  <Button type="submit" className="bg-indigo-600 w-28 dark:text-white hover:bg-[#2962ff]" disabled={loading}>
                    {loading ? (
                      <LoaderCircle className="animate-spin">
                        Saving
                      </LoaderCircle>
                    ) : (
                      "Save"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Formsection;
