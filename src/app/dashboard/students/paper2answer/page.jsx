"use client";
import { useState } from "react";
import pdfToText from "react-pdftotext";
import { chatSession } from "@/utils/GeminiAIModel"; // Assuming you're using some AI model to process questions
import React from "react";
import { Brain, FileText, Lightbulb, MessageCircle } from "lucide-react";
export default function page() {
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState({
   
  });
  const [answers, setAnswers] = useState( {
    
  });
  const [error, setError] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState();

  function extractText(event) {
    const file = event.target.files[0];
    setFile(file);
    pdfToText(file)
      .then((text) => {
        console.log(text);
        setPdfText(text);
      })
      .catch((error) =>
        console.error("Failed to extract text from pdf", error)
      );
  }

  function formatStringWithNewlines(input) {
    // console.log(input.replace(/(\(\d+\))/g, '\n $1'));

    return input.replace(/(\(\d+\))/g, "\n $1");
  }

  const submit = async () => {
    if (!pdfText) {
      setError("Please upload a PDF first!");
      return;
    }

    const prompt = `Extract the questions from the following text in JSON: ${pdfText}. Give question number and question as key and value in JSON format.`;
    const result = await chatSession.sendMessage(prompt);

    if (!result) {
      setError("An error occurred while processing the file.");
      return;
    }

    const questionsText = result.response.text();
    // console.log(questionsText);

    try {
      const parsedQuestions = JSON.parse(questionsText);
      console.log(parsedQuestions);

      setQuestions(parsedQuestions);
      setError("");
    } catch (error) {
      setError("Failed to parse questions from the AI response.");
    }
  };

  const getAnswer = async (questionKey) => {
    if (!questionKey) {
      setError("Please select a question first!");
      return;
    }

    const question = questions[questionKey];
    if (!question) {
      setError("Invalid question selected.");
      return;
    }

    const prompt = `What is the answer to the following question: ${question}`;
    const result = await chatSession.sendMessage(prompt);

    if (!result) {
      setError("An error occurred while fetching the answer.");
      return;
    }

    const answerText = result.response.text();
    console.log(JSON.parse(answerText));
    

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionKey]: JSON.parse(answerText),
    }));
    setError("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-500">
        PaperSolver: Extract Questions & Get Answers
      </h1>

      <div className="m-8">
        <div className="flex items-center justify-center ">
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center sm:p-32 p-5 h-64 border-2 ${
              file
                ? "bg-green-100 border-green-500"
                : "bg-gray-50 border-gray-300 hover:bg-gray-100"
            }  rounded-lg cursor-pointer transition`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {file ? (
                <>
                  <svg
                    className="w-8 h-8 mb-4 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8.5 8 12l7-7m-7 7L5 8.5 8 12l7-7"
                    />
                  </svg>
                  <p className="mb-2 text-lg font-bold text-green-500">
                    PDF Uploaded Successfully!
                  </p>
                  <p className="text-xs text-gray-500">
                    Upload a new file if needed
                  </p>
                </>
              ) : (
                <>
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-zinc-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-zinc-800">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-zinc-800">
                    Upload a PDF file (MAX. 800x400px)
                  </p>
                </>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(event) => {
                const uploadedFile = event.target.files[0];
                setFile(uploadedFile);
                extractText(event); // Call the function to process the file
              }}
            />
          </label>
        </div>
      </div>

      <div className="text-center flex justify-center">
        <button
          onClick={submit}
          className={`${
            questions.length > 0 ? " bg-green-500" : ""
          } bg-indigo-500 flex justify-center  text-white px-6 py-3 rounded-sm hover:bg-indigo-400 transition`}
        >
          <FileText className="w-5 h-5" />
          <span>Extract Questions</span>
        </button>
      </div>

      {/* <div className="my-8">
        <textarea
          rows="10"
          className="text-white w-full p-4 border border-gray-300 rounded-lg"
          value={pdfText}
          readOnly
          style={{ width: "100%" }}
        />
      </div> */}

      {error && <div className="text-red-500 text-center">{error}</div>}

      {Object.keys(questions).length > 0 && (
        <div className="  space-y-4 my-8 p-4">
          {Object.keys(questions).map((questionKey) => (
            <div
              key={questionKey}
              className=" w-full bg-indigo-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-transform transform "
            >
              <h1
                onClick={() =>
                  setSelectedQuestion(
                    questionKey === selectedQuestion ? null : questionKey
                  )
                }
                className="text-indigo-600 hover:text-indigo-800 cursor-pointer w-full text-left font-semibold text-lg"
                style={{ whiteSpace: "pre-line" }}
              >
                {formatStringWithNewlines(String(questions[questionKey]))}
              </h1>

              {selectedQuestion === questionKey && (
                <div className="mt-2 w-full  ">
                  <div className="flex justify-center">
                    <button
                      onClick={() => getAnswer(questionKey)}
                      className={`${answers[questionKey]?" bg-green-500 hover:bg-green-400 ": " bg-blue-500 hover:bg-blue-400 "} text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 shadow-lg  hover:shadow-xl transition-transform transform hover:scale-105`}
                    >
                      <Lightbulb className="w-5 h-5" /> 
                      <span className="font-semibold">Get Answer</span>{" "}
                   
                    </button>
                  </div>

                  {answers && (
                    <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded-lg">
                      <h4 className="text-lg font-bold text-black">Answer:</h4>
                      <p className="text-black whitespace-pre-line">
                        

{Object.keys(answers).map((key) => (
  <div key={key} className="mb-8 p-4 border rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-indigo-600 capitalize">{key}</h2>
    {Object.keys(answers[key]).map((subKey) => (
      <div key={subKey} className="mt-4">
        <h3 className="text-lg font-medium text-gray-700 capitalize">{subKey}</h3>
        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border">
          {typeof answers[key][subKey] === 'object'
            ? JSON.stringify(answers[key][subKey], null, 2) 
            : answers[key][subKey]}
        </pre>
      </div>
    ))}
  </div>
))}

                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
