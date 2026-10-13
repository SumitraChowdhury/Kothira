import React from "react";
import Grid from "@mui/material/Grid";
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profile from "../assets/profile.jpg";
import Image from "../components/Image";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <div className="h-[415px]  w-full  mt-8">
          <div className="relative w-full rounded-xl bg-red-100">
            <input
              className="py-3 pl-15 pr-10 shadow-2xl  w-full"
              type="text"
              placeholder="Search"
            />
            <IoSearchOutline className="text-xl absolute top-1/2 left-4 -translate-y-1/2" />
            <BsThreeDotsVertical className="text-xl absolute top-1/2 right-3 -translate-y-1/2" />
          </div>
          <div className="h-[360px] overflow-y-scroll w-full h-full bg-red-100 mt-5 shadow-2xl rounded-xl">
            <div className="flex justify-between px-5 py-4">
              <h3 className="text-xl font-bold">Groups List</h3>
              <BsThreeDotsVertical className="text-xl" />
            </div>

            <div className="flex justify-between items-center px-5 my-4">
              <div className="flex gap-x-4 items-center">
                <div className="w-[65px] h-[65px] rounded-full">
                  <Image className="rounded-full" src={Profile} />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">Friends Reunion</h5>
                  <p className="text-base font-normal">Hi Guys, Wassup!</p>
                </div>
              </div>
              <button className="bg-[#5F35F5] py-1 px-3 text-white font-bold rounded-md">
                Join
              </button>
            </div>
            <div className="flex justify-between items-center px-5 my-4">
              <div className="flex gap-x-4 items-center">
                <div className="w-[65px] h-[65px] rounded-full">
                  <Image className="rounded-full" src={Profile} />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">Friends Reunion</h5>
                  <p className="text-base font-normal">Hi Guys, Wassup!</p>
                </div>
              </div>
              <button className="bg-[#5F35F5] py-1 px-3 text-white font-bold rounded-md">
                Join
              </button>
            </div>
            <div className="flex justify-between items-center px-5 my-4">
              <div className="flex gap-x-4 items-center">
                <div className="w-[65px] h-[65px] rounded-full">
                  <Image className="rounded-full" src={Profile} />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">Friends Reunion</h5>
                  <p className="text-base font-normal">Hi Guys, Wassup!</p>
                </div>
              </div>
              <button className="bg-[#5F35F5] py-1 px-3 text-white font-bold rounded-md">
                Join
              </button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
