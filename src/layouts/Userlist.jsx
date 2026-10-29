import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profile from '../assets/profile.jpg'
import Image from '../components/Image'
import UserSection from '../components/userSection';
import TitleSection from '../components/TitleSection';
import Searchbar from '../components/Searchbar';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Userlist = () => {
  const db = getDatabase();
  const [alluser,setAllUser]=useState([])


  useEffect(() => {
    const starCountRef = ref(db, 'allusers' );
    onValue(starCountRef, (snapshot) => {
      let arr=[]
      snapshot.forEach(item=>{
        arr.push(item.val())
      })
      setAllUser(arr);
      
      
    });

  }, [])

 
  


  return (
    <div className='h-[320px]  w-full  mt-8'>
      <Searchbar />
      <div className=' w-full h-full bg-red-100 mt-4 shadow-2xl rounded-xl'>
        <TitleSection title="User List" />

        <div className='h-[260px] overflow-y-scroll'>
          {
            alluser.map(item=>(
              <UserSection image={Profile} name={item.name} bia={item.email} />

            ))
          }
       

        </div>
      </div>
    </div>
  )
}

export default Userlist