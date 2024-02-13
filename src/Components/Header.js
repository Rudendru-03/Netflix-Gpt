import React from "react";
import { NETFLIX_ICON } from "../Constant";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 h-20 text-red-900" src={NETFLIX_ICON} alt="logo" />
    </div>
  );
};

export default Header;
