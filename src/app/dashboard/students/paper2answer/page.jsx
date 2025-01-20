"use client";
import { useState } from "react";
import pdfToText from "react-pdftotext";
import { chatSession } from "@/utils/GeminiAIModel"; // Assuming you're using some AI model to process questions
import React from "react";
import { Brain, FileText, Lightbulb, MessageCircle } from "lucide-react";
export default function page() {
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState({
    1: "(a) Compute the reflexive transitive closure (R*) for given R. R = {(a,a), (b,b), (b,c), (c,a), (a,d), (b,d)} 2(CO1)\n(b) Describe the Chomsky Hierarchy along with grammar and accepting device. Also Consider the given grammar. Identify the type, name of grammar, Language the grammar can recognize and the accepting device : Sa u abc | AaB bB u Bb 2+2(CO1)\n(c) Prove the following theorem by principle of mathematical induction : 1+4+7+......+(3n–2) = [n(3n–1)/2 4(CO1)\n(d) Prove the following theorem by principle of mathematical induction that 3 n –1 a multiple of 2. 4(CO1)",
    2: "(a) Compute the equivalent DFA for the given NFA with ε by first computing NFA without ε . NFA = [{q0, q1, q2, q3}, {a, b, c, ε }, δ , q0,{q3}]\nδ = State a b c ε\nu q0 q2,q3 q2 – q1\nq1 q2 – q3 q2\nq2 – – q2 q3 *\nq3 – – q3 – 7(CO2)\n(b) Convert the given Mealy machine to Moore machine : Present a=0 a=1 state State Output State Output\nu q1 q1 1 q3 1\nq2 q2 1 q1 1\nq3 q2 0 q3 0 3(CO2)\n(c) Construct a DFA for the following on Σ = {a, b}:\n(1) Which accept set of all strings on starting with prefix ab.\n(2) Which accept set of all strings with no more than three a's. Also show the acceptance of valid string as per the DFA constructed. 3(CO2)",
    3: "(a) Design a CFG for the regular language :\n(1) L = {0 m 1 n 0 m+n | m,n > = , 1}\n(2) L = {a n b m | n!=m} Also show that the designed grammar can derive correct string. 3(CO1)\n(b) State how to identify ambiguous grammars. Also remove left recursion from the following grammar :\nS u aBDh | bGa\nB u Bb | c\nD u EF\nE u g | ε\nF u f | ε\nG u Gb | Gt | a 3(CO1)\n(c) Prove that the language is not regular using Pumping Lemma : L = {a n b n c n | n>=1} 3(CO1)\n(d) Convert given Context Free Grammar to its equivalent Greibach Normal Form(GNF).\nS u AB | b\nA u SB | c\nB u AB | a 4(CO1)",
    4: "(a) Solve any Two : Design Push Down Automata for the given language. Also show string acceptance for each language. Consider any valid string of length greater than 5.\n(1) L = {a n b 2n | n>=1}\n(2) L = {(a, b)* | number of a > number of b}\n(3) L = {a 2n c b n | n>=1} 5(CO3)\n(b) Convert the given Push Down Automata to Context Free Grammar (CFG).\nM=({q0,q1},{0,1},{Z0,X}, δ , q0, Z0, Φ } where δ is given below :\nδ {q0,1,Z0) u {(q0,XZ0)}\nδ (q0,1,X) u {(q0,XX)}\nδ (q0,0,X) u {(q1,X)}\nδ (q0, ε ,Z0) u {(q0, ε )}\nδ (q1,1,X) u {(q1, ε )}\nδ (q1,0,Z0) u {(q0,Z0)} Also find the reduced grammar. 5(CO3)",
    5: '(a) Design a Turing machine for the regular expression: aba*ba. Show that the string "abab" is valid. 3(CO3)\n(b) Design a Turing machine to perform the function f(x,y) = x*y. 4(CO3)\n(c) Design a Turing machine that performs mod operation as follows : n mod 5. 4(CO3)\n(d) Write short note on Halting Problem of Turning Machine. 3(CO3)',
    6: "(a) Explain Ackerman function and find : A[2,2] 3(CO4)\n(b) Infer whether the following functions are primitive recursive or not(any Two ).\n(1) f(x, y) = x*y\n(2) f(x, y) = xy\n(3) f(x, y) = m 2n 4(CO4)\n(c) Apply the post correspondence problem to find the solution for the given lists.\n(1) A = {001, 0011, 11, 101} B = {01, 111, 111, 010}\n(2) A = {0, 01000, 01} B = {000, 01, 1} 3(CO4)",
  });
  const [answers, setAnswers] = useState( {
    "a": {
      "NFA_without_epsilon": {
        "states": ["q0", "q1", "q2", "q3"],
        "alphabet": ["a", "b", "c"],
        "transition_function": {
          "q0": {"a": ["q2", "q3"], "b": ["q2"], "c": []},
          "q1": {"a": ["q2"], "b": [], "c": ["q2", "q3"]},
          "q2": {"a": [], "b": [], "c": ["q3"]},
          "q3": {"a": [], "b": [], "c": []}
        },
        "start_state": "q0",
        "accept_states": ["q3"]
      },
      "equivalent_DFA": {
        "states": ["A", "B", "C", "D"],
        "alphabet": ["a", "b", "c"],
        "transition_function": {
          "A": {"a": "B", "b": "C", "c": "D"},
          "B": {"a": "B", "b": "C", "c": "D"},
          "C": {"a": "B", "b": "C", "c": "D"},
          "D": {"a": "B", "b": "C", "c": "D"}
        },
        "start_state": "A",
        "accept_states": ["B", "D"]
      }
    },
    "b": {
      "Mealy_machine": {
        "states": ["q1", "q2", "q3"],
        "alphabet": ["0", "1"],
        "transition_function": {
          "q1": {"0": {"next_state": "q1", "output": "1"}, "1": {"next_state": "q3", "output": "1"}},
          "q2": {"0": {"next_state": "q2", "output": "1"}, "1": {"next_state": "q1", "output": "1"}},
          "q3": {"0": {"next_state": "q2", "output": "0"}, "1": {"next_state": "q3", "output": "0"}}
        },
        "start_state": "q1"
      },
      "equivalent_Moore_machine": {
        "states": ["q1", "q2", "q3", "q4", "q5"],
        "alphabet": ["0", "1"],
        "transition_function": {
          "q1": {"0": "q1", "1": "q4"},
          "q2": {"0": "q2", "1": "q5"},
          "q3": {"0": "q3", "1": "q3"},
          "q4": {"0": "q4", "1": "q5"},
          "q5": {"0": "q2", "1": "q5"}
        },
        "output_function": {
          "q1": "1", "q2": "1", "q3": "0", "q4": "1", "q5": "0"
        },
        "start_state": "q1"
      }
    },
    "c": {
      "DFA_prefix_ab": {
        "states": ["q0", "q1", "q2", "q3"],
        "alphabet": ["a", "b"],
        "transition_function": {
          "q0": {"a": "q1", "b": "q0"},
          "q1": {"a": "q1", "b": "q2"},
          "q2": {"a": "q3", "b": "q3"},
          "q3": {"a": "q3", "b": "q3"}
        },
        "start_state": "q0",
        "accept_states": ["q2", "q3"]
      },
      "DFA_no_more_than_three_a": {
        "states": ["q0", "q1", "q2", "q3", "q4"],
        "alphabet": ["a", "b"],
        "transition_function": {
          "q0": {"a": "q1", "b": "q0"},
          "q1": {"a": "q2", "b": "q0"},
          "q2": {"a": "q3", "b": "q0"},
          "q3": {"a": "q4", "b": "q0"},
          "q4": {"a": "q4", "b": "q4"}
        },
        "start_state": "q0",
        "accept_states": ["q0", "q1", "q2", "q3"],
        "acceptance_example": ["abab", "abba", "bbb", "aabb"]
      }
    }
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
