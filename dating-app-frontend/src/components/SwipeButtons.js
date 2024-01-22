import React from "react";
import { IconButton } from "@mui/joy";
import { IoMdStar } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";

const SwipeButtons = () => {
  return (
    <div className="fixed flex w-full justify-evenly bottom-[10vh] ">
      <IconButton
        style={{
          borderRadius: "99%",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0px 10px 53px 0px rgba(0, 0, 0, 0.3)",
        }}
        className=" bg-white rounded-full "
      >
        <MdOutlineReplayCircleFilled className=" text-teal-600 text-4xl p-1 "></MdOutlineReplayCircleFilled>
      </IconButton>
      <IconButton
        style={{
          borderRadius: "99%",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0px 10px 53px 0px rgba(0, 0, 0, 0.3)",
        }}
        className=" bg-white rounded-full p-10"
      >
        <IoIosCloseCircle className=" text-blue-600 text-4xl p-1"></IoIosCloseCircle>
      </IconButton>
      <IconButton
        style={{
          borderRadius: "99%",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0px 10px 53px 0px rgba(0, 0, 0, 0.3)",
        }}
        className=" bg-white"
      >
        <IoMdStar className="text-yellow-500 text-4xl p-1"></IoMdStar>
      </IconButton>
      <IconButton
        style={{
          borderRadius: "99%",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0px 10px 53px 0px rgba(0, 0, 0, 0.3)",
        }}
        className=" bg-slate-400"
      >
        <MdFavorite className="text-red-600 text-4xl p-1"></MdFavorite>
      </IconButton>
      <IconButton
        style={{
          borderRadius: "99%",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0px 10px 53px 0px rgba(0, 0, 0, 0.3)",
        }}
        className=" bg-white"
      >
        <MdFlashOn className=" text-fuchsia-900 text-4xl p-1"></MdFlashOn>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
