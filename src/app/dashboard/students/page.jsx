import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
    <header className="bg-indigo-600 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">PaperSolver: Extract Questions & Get Answers</h1>
        <a
          href="#signup"
          className="bg-white text-indigo-600  sm:px-6 px-8 sm:py-2 rounded-md sm:text-lg font-semibold hover:bg-indigo-100 transition"
        >
        <Link href={"/dashboard/students/paper2answer"}>  Get Started</Link>
        </a>
      </div>
    </header>
    <section className="dark:bg-[#2b2a2a] py-16 text-center">
      <h2 className="text-4xl font-extrabold ">
        Convert Your Previous Question Papers into Study Material
      </h2>
      <p className="mt-4 text-lg text-indigo-600 dark:text-indigo-300">
        Upload your previous question papers, extract the questions, and instantly
        get the answers at the click of a button. PaperSolver makes revision easier!
      </p>
      <div className="mt-8">
        <a
          href="#features"
          className="dark:bg-white bg-indigo-500   text-white dark:text-indigo-600 px-8 py-3 rounded-full text-xl font-semibold dark:hover:bg-indigo-100 transition"
        >
          Learn More
        </a>
      </div>
    </section>
    <section id="features" className="py-16 dark:bg-[#2b2a2a]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-inigo-500">Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800">
              Extract Questions from Previous Papers
            </h3>
            <p className="mt-4 text-indigo-600">
              Upload any previous question paper (in PDF format), and our system will
              automatically extract the questions, making your revision process easier.
            </p>
          </div>
          <div className="bg-gray-100 p-6 mb-5 rounded-lg shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800">
              One-Click Answer Reveal
            </h3>
            <p className="mt-4 text-indigo-600">
              After extracting the questions, simply click the "Answer" button to instantly
              view the correct answers from our database, giving you a complete study guide.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800">
              Easy-to-Use Interface
            </h3>
            <p className="mt-4 text-indigo-600">
              Our user-friendly interface ensures that uploading your papers, viewing questions,
              and getting answers is quick and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" className="py-16 dark:bg-[#2b2a2a]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold ">How It Works</h2>
        <div className="mt-8">
  <ol className="list-none space-y-4 text-lg dark:text-indigo-200 text-indigo-700 max-w-xl mx-auto text-center">
    <li>Step 1: Upload your previous question paper (PDF format).</li>
    <li>Step 2: Our system extracts all the questions from the paper.</li>
    <li>Step 3: View the extracted questions and click on the "Answer" button.</li>
    <li>Step 4: Instantly view the correct answers to those questions.</li>
  </ol>
</div>

      </div>
    </section>

    <section id="signup" className="dark:bg-[#2b2a2a] dark:text-white py-16 text-center">
      <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
      <p className="mt-4 text-lg dark:text-indigo-200 text-indigo-600">
        Sign up now to upload your first previous question paper, extract questions,
        and get answers instantly to enhance your revision.
      </p>
      <div className="mt-8">
        <a
          href="#signup-form"
          className="dark:bg-white bg-indigo-500 text-white hover:bg-indigo-400 dark:text-indigo-500 px-8 py-3 rounded-sm text-xl font-semibold dark:hover:bg-indigo-100 transition"
        >
      Next
        </a>
      </div>
    </section>

   
    <footer className="dark:bg-[#2b2a2a] dark:text-white py-6 text-center">
      <p>&copy; 2025 Rajat. All Rights Reserved.</p>
      <p>
        For Any Suggestions Contact us at{" "}
        <a href="pariharrajat078@gamil.com" className="text-indigo-400">
        pariharrajat078@gamil.com
        </a>
      </p>
    </footer>
  </div>

  )
}

export default page