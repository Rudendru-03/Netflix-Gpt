import React from "react";
import { BACKGROUND_IMG } from "../Constant";
import Header from "../Components/Home/Header";

const Browse = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={BACKGROUND_IMG}
            alt="bg-icon"
            className="w-full h-full object-cover"
          />
        </div>
        <Header />
        <div className="relative z-10 p-4">
          <div>
            <h1 className="text-white">Unlimited movies, TV shows and more</h1>
            <p className="text-white">Watch anywhere. Cancel anytime.</p>
            <div>
              <form action="">
                <h3 className="text-white">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div>
                  <div>
                    <label className="text-white" htmlFor="email">
                      Email address
                    </label>
                  </div>
                  <div>
                    <input type="text" id="email" />
                  </div>
                </div>
                <button className="bg-red-700 text-white">
                  Get Started
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      data-icon="ChevronRightStandard"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
