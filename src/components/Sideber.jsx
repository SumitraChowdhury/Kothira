import React from 'react'
import { IoHomeOutline, IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Profile from '../assets/profile.jpg'
import Image from './Image'
import { Link, useLocation } from 'react-router-dom';
import { IoMdCloudUpload } from "react-icons/io";





const Sideber = () => {
  let location = useLocation()
  let active=location.pathname.replace("/","")
  console.log(active);
  
  return (
    <div className='py-13 flex flex-col justify-between items-center w-[85%] mx-auto h-[94vh] bg-red-200 rounded-[20px] mt-8'>


     <div className='flex flex-col items-center gap-y-17'>
       <div className='group relative w-23 h-23 rounded-full'>
        <Image className='rounded-full' src={Profile}/>
        <div className='absolute top-0 left-0 w-full h-full bg-transparent group-hover:bg-black/30 rounded-full duration-500 flex justify-center items-center'>
        <IoMdCloudUpload className='text-xl text-transparent group-hover:text-white duration-500'/>
        </div>
      </div>

      <div className='flex flex-col gap-y-14'>

        <Link className={`relative after:absolute after:top-1/2 after:-left-[30%] after:-translate-y-1/2 ${active=="home"&& "after:bg-[#fff]"} after:w-[150px] after:rounded-l-xl after:h-[80px] after:content-[""] after:-z-10 z-10 before:absolute before:top-1/2 before:left-[131px] before:-translate-y-1/2 ${active=="home"? "before:bg-black" :"bg-red-200"} before:w-[10px] before:rounded-l-xl before:h-[80px] before:content-[""]`} to="/home"> <IoHomeOutline className={`text-5xl ${active=="home"?"text-black" :"text-black"}`} /></Link>


        <Link className={`relative after:absolute after:top-1/2 after:-left-[30%] after:-translate-y-1/2 ${active=="message"&& "after:bg-[#fff]"} after:w-[150px] after:rounded-l-xl after:h-[80px] after:content-[""] after:-z-10 z-10 before:absolute before:top-1/2 before:left-[131px] before:-translate-y-1/2  ${active=="message"? "before:bg-black" :"bg-red-200"} before:w-[10px] before:rounded-l-xl before:h-[80px] before:content-[""]`} to="/message"> <AiFillMessage className={`text-5xl ${active=="message"?"text-black" :"text-black"}`} /></Link>

        <Link className={`relative after:absolute after:top-1/2 after:-left-[30%] after:-translate-y-1/2 ${active=="setting"&& "after:bg-[#fff]"} after:w-[150px] after:rounded-l-xl after:h-[80px] after:content-[""] after:-z-10 z-10 before:absolute before:top-1/2 before:left-[131px] before:-translate-y-1/2  ${active=="setting"? "before:bg-black" :"bg-red-200"} before:w-[10px] before:rounded-l-xl before:h-[80px] before:content-[""]`} to="/setting"> <IoSettingsOutline className={`text-5xl ${active=="setting"?"text-black" :"text-black"}`} /></Link>


        <Link className={`relative after:absolute after:top-1/2 after:-left-[30%] after:-translate-y-1/2 ${active=="notification"&& "after:bg-[#fff]"} after:w-[150px] after:rounded-l-xl after:h-[80px] after:content-[""] after:-z-10 z-10 before:absolute before:top-1/2 before:left-[131px] before:-translate-y-1/2  ${active=="notification"? "before:bg-black" :"bg-red-200"} before:w-[10px] before:rounded-l-xl before:h-[80px] before:content-[""]`} to="/notification">  <IoNotificationsOutline className={`text-5xl ${active=="notification"?"text-black" :"text-black"}`} /></Link>
      
        
        
       
      </div>
     </div>


      <RiLogoutBoxRLine className='text-5xl text-black' />




    </div>
  )
}

export default Sideber