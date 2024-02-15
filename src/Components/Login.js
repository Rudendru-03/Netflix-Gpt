import React, { useState, useRef } from "react";
import Header from "./Header";
import { BACKGROUND_IMG } from "../Constant";
import { checkValidateSignUp, checkValidateSignIn } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [checked, setchecked] = useState(true);
  const [ErrorMessageIn, setErrorMessageIn] = useState(null);
  const [ErrorMessageUp, setErrorMessageUp] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);

  const handleClickSignUpBtn = () => {
    const ErrorMessageSignUP = checkValidateSignUp(
      name.current.value,
      email.current.value,
      password.current.value,
      confirmpassword.current.value
    );
    setErrorMessageUp(ErrorMessageSignUP);
    if (ErrorMessageIn) return;

    //Sign In or Sign Up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleClickSignInBtn = () => {
    const ErrorMessageSignIn = checkValidateSignIn(
      email.current.value,
      password.current.value
    );
    setErrorMessageIn(ErrorMessageSignIn);

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-" + errorMessage);
      });
  };

  const handleChecked = () => {
    setchecked(!checked);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="bg-icon" />
      </div>
      <form
        className="bg-black absolute p-12 w-3/12 mx-auto my-40 right-0 left-0 bg-opacity-75 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        {isSignInForm ? (
          <h1 className="text-white font-bold text-2xl px-2">Sign In</h1>
        ) : (
          <h1 className="text-white font-bold text-2xl px-2">Sign Up</h1>
        )}

        {!isSignInForm ? (
          <input
            ref={name}
            className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
            type="text"
            placeholder="Full Name"
          />
        ) : null}
        {!isSignInForm ? (
          <p className="text-red-800 px-2 font-bold">
            {ErrorMessageUp === "Please enter your full name"
              ? ErrorMessageUp + " ❌"
              : null}
          </p>
        ) : null}
        <input
          ref={email}
          className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
          type="email"
          placeholder="Email or Phone"
        />
        <p className="text-red-800 px-2 font-bold">
          {ErrorMessageIn === "Email Id is not Valid"
            ? ErrorMessageIn + " ❌"
            : null}
          {ErrorMessageUp === "Email Id is not Valid"
            ? ErrorMessageUp + " ❌"
            : null}
        </p>
        <input
          ref={password}
          className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-800 px-2 font-bold">
          {ErrorMessageIn === "Password is not Valid"
            ? ErrorMessageIn + " ❌"
            : null}
          {ErrorMessageUp === "Password is not Valid"
            ? ErrorMessageUp + " ❌"
            : null}
        </p>
        {!isSignInForm ? (
          <input
            ref={confirmpassword}
            className="m-2 px-2 py-2 rounded-md w-full bg-[#454545]"
            type="password"
            placeholder="Confirm Password"
          />
        ) : null}
        <p className="text-red-800 px-2 font-bold">
          {ErrorMessageUp === "Password not match or InValid"
            ? ErrorMessageUp
            : null}
          {ErrorMessageUp === "Password is not Match" ? ErrorMessageUp : null}
        </p>
        {isSignInForm ? (
          <button
            className="bg-red-900 m-2 px-3 py-2 rounded-md w-full"
            onClick={() => handleClickSignInBtn()}
          >
            Sign In
          </button>
        ) : (
          <button
            className="bg-red-900 m-2 px-3 py-2 rounded-md w-full"
            onClick={() => handleClickSignUpBtn()}
          >
            Register
          </button>
        )}
        {isSignInForm ? (
          <p className="text-white px-16">Forget password?</p>
        ) : null}
        {isSignInForm ? (
          <label className="text-white mx-2 p-2">
            <input type="checkbox" checked={checked} onChange={handleChecked} />{" "}
            Remember me
          </label>
        ) : null}
        {isSignInForm ? (
          <p
            className="cursor-pointer text-[#E1D9D1] px-2"
            onClick={() => setisSignInForm(false)}
          >
            New to Netflix? Sign up now.
          </p>
        ) : (
          <p
            className="cursor-pointer text-[#E1D9D1] px-2"
            onClick={() => setisSignInForm(true)}
          >
            Already Registerd? Sign In Now.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
