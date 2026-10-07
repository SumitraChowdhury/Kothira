import React from "react";
import Image from "../components/Image";
import ProfileImage from "../assets/profile.png";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sideber = () => {
  return (
    <div className="flex flex-col justify-around items-center w-[85%] mx-auto h-[93vh] rounded-[20px] mt-10 bg-[#5F35F5]">
      <div className="w-25 h-25 rounded-full mt-[38px] mb-0">
        <Image className="rounded-full" src={ProfileImage} alt=""/>
      </div>
      <div className="flex flex-col mt-0 gap-y-12">
        <IoHomeOutline className="text-[50px] text-white" />
        <AiFillMessage className="text-[50px] text-white" />
        <IoIosNotificationsOutline className="text-[50px] text-white" />
        <CiSettings className="text-[50px] text-white" />
      </div>
      <RiLogoutBoxRLine className="text-[50px] text-white" />
    </div>
  );
};

export default Sideber;
