import React, { useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMG } from "../Constant";

const Login = () => {
  const [SignIn, setSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="bg-icon" />
      </div>
      <form className="bg-black absolute p-12 w-3/12 mx-auto my-40 right-0 left-0 bg-opacity-75 rounded-md">
        {SignIn ? (
          <h1 className="text-white font-bold text-2xl px-2">Sign In</h1>
        ) : (
          <h1 className="text-white font-bold text-2xl px-2">Sign Up</h1>
        )}

        {!SignIn ? (
          <input
            className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
            type="text"
            placeholder="Full Name"
          />
        ) : null}

        <input
          className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
          type="email"
          placeholder="Email or Phone"
        />
        <input
          className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
          type="password"
          placeholder="Password"
        />
        {!SignIn ? (
          <input
            className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
            type="password"
            placeholder="Confirm Password"
          />
        ) : null}

        {SignIn ? (
          <button className="bg-red-900 m-2 px-3 py-2 rounded-md w-full">
            Sign In
          </button>
        ) : (
          <button className="bg-red-900 m-2 px-3 py-2 rounded-md w-full">
            Register
          </button>
        )}
        <p
          className="cursor-pointer text-[#E1D9D1] px-2"
          onClick={() => setSignIn(false)}
        >
          New to Netflix? Sign up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
