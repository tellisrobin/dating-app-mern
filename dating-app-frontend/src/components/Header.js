import React from "react";
//import "../index";
import "./Header";

import { IoPersonCircle } from "react-icons/io5";
import { IconButton } from "@mui/joy";
import { GoCommentDiscussion } from "react-icons/go";
const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between z-[100] border-b-[#f9f9f9] border-b border-solid bg-red-300">
        <IconButton>
          <IoPersonCircle className="object-contain" />
        </IconButton>
        <img className="h-10  object-contain" src="logo192.png" alt="header" />
        <IconButton>
          <GoCommentDiscussion className="object-contain flex" />
        </IconButton>
      </div>
    </>
  );
};

export default Header;
