"use client"
import React, { useEffect, useState } from 'react'
import { 
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    Editor,
    EditorProvider,
    HtmlButton,
    Separator,
    Toolbar
  } from 'react-simple-wysiwyg';
  import "../../../globals.css"
import { chatSession } from '@/utils/GeminiAIModel';
import { toast } from 'sonner';
function RichTextEditor({onrichval,onRichTextEdtitorChange,workexp,val}) {
    
  
    const [value, setValue] = useState(val);
    const[ailoading,setailoading]=useState(false)
  function onChange(e) {
    setValue(e.target.value);
    onRichTextEdtitorChange(e)
    console.log(workexp);
  }
  const generateAISummary = async () => {
    setailoading(true)
    const inputPrompt = `
    Generate a professional work summary in html for react rich text editor bullet points based on the following details. The summary should focus on key responsibilities, achievements, and the impact of the role. Make sure to tailor it for the given position, emphasizing the skills, contributions, and overall experience in the role.
    Use the provided information and format it as a series of bullet points:
    Company Name: ${workexp.companyName}
    Title: ${workexp.title}
    Location:  ${workexp.location}
    Start Date:  ${workexp.startDate}
    End Date:  ${workexp.endDate}
    Currently Working:  ${workexp.currentlyWorking}
    The bullet points should highlight genarate based on the above details:

Key responsibilities and tasks in the role.
Achievements and contributions to the company.
Skills developed or utilized during the tenure.
Any significant impact or outcomes from the work done.
Give "workSummary"  as field in JSON 
    `;
    const result = await chatSession.sendMessage(inputPrompt);
    const mockresponse =JSON.parse(result.response.text());
    console.log(mockresponse);
    setValue(mockresponse?.workSummary)
    console.log(mockresponse?.workSummary);
    onrichval(mockresponse?.workSummary)
    setailoading(false)
    // setsummary(mockresponse?.summary)
    if(mockresponse){
      toast("Work Summary Generated Successfully!!")
    }
    
  };
  return (
  <div>
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
      <EditorProvider>
      <Editor defaultValue={val} value={value} onChange={onChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
        
          <BtnStyles />
        </Toolbar>
      </Editor>
    </EditorProvider>
    </div>
  )
}

export default RichTextEditor