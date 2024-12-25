import ToggleButton from "@/app/Toggle";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 ">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className=" absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to AI-Interviewer 🦑
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Welcome to AI Interview Pro Your Gateway to Smarter Interview
                Preparation AI Interview Pro is designed to help you master
                interviews with confidence. Our advanced AI-driven platform
                provides: Tailored Practice Sessions: Simulate real interview
                scenarios with personalized questions based on your skills and
                goals. Instant Feedback: Receive detailed feedback to refine
                your answers and improve your performance. Real-Time Analysis:
                Leverage AI-powered insights to understand your strengths and
                areas of improvement. Whether you're preparing for technical
                interviews, HR rounds, or group discussions, AI Interview Pro
                ensures you're ready to excel. Log in to take your preparation
                to the next level.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                  href="#"
                >
                  <span className="sr-only">Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 350 350"
                    // xml:space="preserve"
                  >
                    <path
                      fill="#041C3F"
                      d="M273.646 177.521v-2.935c0-23.173-18.853-42.025-42.024-42.025H181.77v-17.956c11.31-2.999 19.671-13.319 19.671-25.559 0-14.581-11.861-26.441-26.441-26.441s-26.442 11.86-26.442 26.441c0 12.239 8.361 22.56 19.67 25.559v17.956h-49.85c-23.173 0-42.025 18.853-42.025 42.025v2.935c-16.411 3.172-28.845 17.645-28.845 34.967 0 17.344 12.46 31.826 28.897 34.979 1.096 22.201 19.503 39.928 41.973 39.928H231.62c22.469 0 40.876-17.727 41.973-39.928 16.437-3.152 28.898-17.635 28.898-34.979 0-17.322-12.433-31.795-28.845-34.967zM76.354 233.496c-8.869-2.865-15.302-11.197-15.302-21.008 0-9.809 6.434-18.141 15.302-21.006v42.014zm183.75 11.873c0 15.705-12.778 28.482-28.483 28.482H118.379c-15.706 0-28.483-12.777-28.483-28.482v-70.782c0-15.705 12.777-28.482 28.483-28.482h113.242c15.705 0 28.483 12.777 28.483 28.482v70.782zm13.542-11.873v-42.014c8.868 2.865 15.303 11.197 15.303 21.006-.001 9.811-6.435 18.143-15.303 21.008z"
                    />
                    <path
                      fill="#9788E2"
                      d="M76.354 233.496c-8.869-2.865-15.302-11.197-15.302-21.008 0-9.809 6.434-18.141 15.302-21.006v42.014zM162.1 89.047c0-7.112 5.787-12.899 12.9-12.899 7.112 0 12.899 5.787 12.899 12.899 0 7.112-5.787 12.899-12.899 12.899-7.113 0-12.9-5.787-12.9-12.899z"
                    />
                    <path
                      fill="#8478D6"
                      d="M175 76.147c-5.371 0-9.982 3.302-11.92 7.979a12.838 12.838 0 0 1 4.92-.979c7.112 0 12.899 5.787 12.899 12.899 0 1.742-.352 3.402-.98 4.92 4.678-1.938 7.98-6.55 7.98-11.92 0-7.111-5.787-12.899-12.899-12.899z"
                    />
                    <path
                      fill="#88E5D9"
                      d="M260.104 245.369c0 15.705-12.778 28.482-28.483 28.482H118.379c-15.706 0-28.483-12.777-28.483-28.482v-70.782c0-15.705 12.777-28.482 28.483-28.482h113.242c15.705 0 28.483 12.777 28.483 28.482v70.782z"
                    />
                    <path
                      fill="#69CCBE"
                      d="M231.621 146.105h-25.224c15.706 0 28.483 12.777 28.483 28.482v70.782c0 15.705-12.777 28.482-28.483 28.482h25.224c15.705 0 28.483-12.777 28.483-28.482v-70.782c0-15.705-12.778-28.482-28.483-28.482z"
                    />
                    <path
                      fill="#9788E2"
                      d="M273.646 233.496v-42.014c8.868 2.865 15.303 11.197 15.303 21.006-.001 9.811-6.435 18.143-15.303 21.008z"
                    />
                    <path
                      fill="#8478D6"
                      d="M68.702 212.488c0-6.66 2.971-12.633 7.651-16.683v-4.323c-8.869 2.865-15.302 11.197-15.302 21.006 0 9.811 6.434 18.143 15.302 21.008v-4.323c-4.68-4.05-7.651-10.024-7.651-16.685zM273.646 191.482v4.324c4.68 4.049 7.651 10.023 7.651 16.682 0 6.661-2.971 12.635-7.651 16.684v4.324c8.868-2.865 15.303-11.197 15.303-21.008-.001-9.808-6.435-18.14-15.303-21.006z"
                    />
                    <path
                      fill="#FF54A4"
                      d="M224.384 201.625a6.44 6.44 0 0 1-6.433-6.432 6.441 6.441 0 0 1 6.433-6.434 6.441 6.441 0 0 1 6.433 6.434 6.44 6.44 0 0 1-6.433 6.432zM125.616 201.625a6.44 6.44 0 0 1-6.433-6.432 6.44 6.44 0 0 1 6.433-6.434 6.441 6.441 0 0 1 6.433 6.434 6.44 6.44 0 0 1-6.433 6.432z"
                    />
                    <path
                      fill="#EF4198"
                      d="M224.384 188.76c-2.852 0-5.273 1.868-6.114 4.443a6.413 6.413 0 0 1 1.989-.318 6.441 6.441 0 0 1 6.433 6.434c0 .694-.114 1.361-.318 1.988 2.576-.84 4.443-3.261 4.443-6.113a6.441 6.441 0 0 0-6.433-6.434zM125.616 188.76c-2.853 0-5.273 1.868-6.114 4.443a6.383 6.383 0 0 1 1.989-.318 6.441 6.441 0 0 1 6.433 6.434c0 .694-.114 1.361-.318 1.988 2.576-.84 4.443-3.261 4.443-6.113a6.44 6.44 0 0 0-6.433-6.434z"
                    />
                    <path
                      fill="#041C3F"
                      d="M224.384 175.219c-11.015 0-19.975 8.961-19.975 19.975 0 11.014 8.96 19.975 19.975 19.975 11.014 0 19.975-8.961 19.975-19.975-.001-11.014-8.962-19.975-19.975-19.975zm0 26.406a6.44 6.44 0 0 1-6.433-6.432 6.441 6.441 0 0 1 6.433-6.434 6.441 6.441 0 0 1 6.433 6.434 6.44 6.44 0 0 1-6.433 6.432zM125.616 175.219c-11.015 0-19.975 8.961-19.975 19.975 0 11.014 8.961 19.975 19.975 19.975 11.014 0 19.975-8.961 19.975-19.975 0-11.014-8.961-19.975-19.975-19.975zm0 26.406a6.44 6.44 0 0 1-6.433-6.432 6.44 6.44 0 0 1 6.433-6.434 6.441 6.441 0 0 1 6.433 6.434 6.44 6.44 0 0 1-6.433 6.432z"
                    />
                    <path
                      fill="#69CCBE"
                      d="M193.451 241.157h-36.902a6.77 6.77 0 1 0 0 13.541h36.902a6.77 6.77 0 0 0 0-13.541z"
                    />
                    <path
                      fill="#041C3F"
                      d="M193.451 236.219h-36.902a6.77 6.77 0 1 0 0 13.541h36.902a6.77 6.77 0 0 0 0-13.541z"
                    />
                  </svg>
                  {/* <img src='https://res.cloudinary.com/metube128/image/upload/v1735102956/clvvjvgt44lt6iaet0lo.png' className="bg-black"></img> */}
                  {/* <img src="https://res.cloudinary.com/metube128/image/upload/v1735103040/arsjnaoahgcggla8eiqm.png"></img> */}
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                  Welcome to AI-Interviewer 🦑
                </h1>

                <h1 className="py-2">
                  <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                    Welcome to AI Interview Pro Your Gateway to Smarter
                    Interview Preparation
                  </p>
                  <p className=" leading-relaxed text-gray-500 dark:text-gray-400">
                    Log in to take your preparation to the next level.
                  </p>
                </h1>
              </div>
              <div className="absolute top-0 right-0 p-5">
                <ToggleButton />
              </div>
              <div className="flex justify-center py-5">
                <SignIn
                  appearance={{
                    elements: {
                      formButtonPrimary: {
                        fontSize: 14,
                        textTransform: "none",
                        backgroundColor: "#611BBD",
                        "&:hover, &:focus, &:active": {
                          backgroundColor: "#49247A",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
