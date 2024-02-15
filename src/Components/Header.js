import React, { useState } from "react";
import { NETFLIX_ICON } from "../Constant";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();
  const handleLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 h-20 text-red-900" src={NETFLIX_ICON} alt="logo" />
      <div>
        <select
          value={selectedLanguage}
          onChange={handleLanguage}
          className="rounded-sm my-6 mx-3 p-2 "
        >
          <option value="en">English</option>
          <option value="hn">Hindi</option>
          <option value="te">Telgu</option>
          <option value="bg">Bhojpuri</option>
          <option value="bg">Bengali</option>
          <option value="ur">Urdu</option>
          <option value="ma">Marathi</option>
        </select>
        <button
          className="bg-red-700 rounded-sm p-2 font-bold text-white text-md"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
