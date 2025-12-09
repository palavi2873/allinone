import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const isLoggedIn = false; 

  return (
    <div className="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] flex p-6 lg:p-8 items-center lg:justify-center min-h-screen flex-col">
      <header className="w-full lg:max-w-4xl max-w-[335px] text-sm mb-6 ">
        <nav className="flex items-center justify-end gap-4">
          {isLoggedIn ? (
            <Link
              to="/dashboard"
              className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] text-[#1b1b18] border border-transparent hover:border-[#19140035] dark:hover:border-[#3E3E3A] rounded-sm text-sm leading-normal"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>

      <div className="flex items-center justify-center w-full transition-opacity opacity-100 duration-750 lg:grow">
        <main className="flex max-w-[265px] flex-col-reverse lg:max-w-4xl lg:flex-row">
          <div className="text-[13px] leading-[20px] flex-1 p-6 pb-12 lg:p-20 bg-white dark:bg-[#161615] dark:text-[#EDEDEC] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d] rounded-bl-lg rounded-br-lg lg:rounded-tl-lg lg:rounded-br-none">

            <h1 className="mb-1 font-medium">Let’s Start Learning React & Node.js!</h1>
            <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
              Discover amazing small and simple projects created using React and Node js.
              <br></br>
              We are also going to learn Microservices and Docker to deploy it.
              <br></br>
              <br />If you need any coding base solution.
            </p>

            <ul className="flex flex-col mb-4 lg:mb-6">
              <li className="flex items-center gap-4 py-2 relative before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A] before:top-1/2 before:bottom-0 before:left-[0.4rem] before:absolute">
                <span className="relative py-1 bg-white dark:bg-[#161615]">
                  <span className="flex items-center justify-center rounded-full bg-[#FDFDFC] dark:bg-[#161615] shadow w-3.5 h-3.5 border dark:border-[#3E3E3A] border-[#e3e3e0]">
                    <span className="rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A] w-1.5 h-1.5"></span>
                  </span>
                </span>
                <span>
                  Read the
                  <a
                    href="https://www.w3schools.com/nodejs/"
                    target="_blank"
                    className="inline-flex items-center space-x-1 font-medium underline underline-offset-4 text-[#f53003] dark:text-[#FF4433] ml-1"
                  >
                    <span>Documentation</span>
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-4 py-2 relative before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A] before:bottom-1/2 before:top-0 before:left-[0.4rem] before:absolute">
                <span className="relative py-1 bg-white dark:bg-[#161615]">
                  <span className="flex items-center justify-center rounded-full bg-[#FDFDFC] dark:bg-[#161615] shadow w-3.5 h-3.5 border dark:border-[#3E3E3A] border-[#e3e3e0]">
                    <span className="rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A] w-1.5 h-1.5"></span>
                  </span>
                </span>
                <span>
                  Watch video tutorials at
                  <a
                    href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?utm_campaign=BG-Search_Keyword_Alpha_Prof_la.EN_cc.India&utm_source=bing&utm_medium=paid-search&portfolio=Bing-India&utm_audience=mx&utm_tactic=nb&utm_term=react+js+full+course&utm_content=o&funnel=&test=&msclkid=e88eefd955ac10c7489386ea9ef3ac92&couponCode=PMNVD2025"
                    target="_blank"
                    className="inline-flex items-center space-x-1 font-medium underline underline-offset-4 text-[#f53003] dark:text-[#FF4433] ml-1"
                  >
                    <span>Laracasts</span>
                  </a>
                </span>
              </li>
            </ul>

            <ul className="flex gap-3 text-sm leading-normal">
              <li>
                <Link
                  to="/shop"
                  className="inline-block dark:bg-[#eeeeec] dark:border-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white dark:hover:border-white hover:bg-black hover:border-black px-5 py-1.5 bg-[#1b1b18] rounded-sm border border-black text-white text-sm leading-normal"
                >
                  Start Learning
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#fff2f2] dark:bg-[#1D0002] relative lg:-ml-px -mb-px lg:mb-0 rounded-t-lg lg:rounded-t-none lg:rounded-r-lg aspect-[335/376] lg:aspect-auto w-full lg:w-[438px] shrink-0 overflow-hidden">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6919/6919085.png"
              alt="Shopping"
              className="w-full h-full object-cover"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Welcome;
