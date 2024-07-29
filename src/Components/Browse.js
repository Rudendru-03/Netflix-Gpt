import React, { useState } from "react";
import { BACKGROUND_IMG } from "../Constant";
import Header from "../Components/Home/Header";

const Browse = () => {
  const [form, setForm] = useState({ email: "" });
  const [err, seterr] = useState(false);

  const isValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleStart = () => {
    console.log(form.email);
    const isTrue = isValid(form.email);
    console.log(isTrue);
    if (!isTrue) {
      seterr(true);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="absolute w-full h-full z-0">
          <img
            src={BACKGROUND_IMG}
            alt="bg-icon"
            className="w-screen h-screen object-cover"
          />
        </div>
        <Header />
        <div className="relative z-10 p-4 flex items-center justify-center min-h-screen bg-black opacity-70 ">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold">
              Unlimited movies, TV shows and more
            </h1>
            <p className="text-white text-2xl font-semibold mt-4">
              Watch anywhere. Cancel anytime.
            </p>
            <div className="mt-4">
              <form action="">
                <h3 className="text-white mb-4 text-xl font-normal">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className="flex items-center justify-center mt-10">
                  <div className="flex flex-col mr-2">
                    <input
                      className="p-2 rounded-sm bg-transparent w-96 py-4 border-white border-2 text-white"
                      type="text"
                      id="email"
                      maxLength={50}
                      placeholder="Enter your email address"
                      onChange={(e) => {
                        setForm({ email: e.target.value });
                      }}
                    />
                  </div>
                  {err ? <p>Please Enter a Valid Email</p> : null}
                  <button
                    onClick={handleStart}
                    className="bg-[#880a0a] text-white py-4 px-6 rounded-sm flex items-center"
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      data-icon="ChevronRightStandard"
                      aria-hidden="true"
                      className="ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
