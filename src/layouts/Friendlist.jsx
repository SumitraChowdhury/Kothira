import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profile from '../assets/profile.jpg'
import Image from '../components/Image'
import UserSection from '../components/userSection';
import TitleSection from '../components/TitleSection';
import Searchbar from '../components/Searchbar';

const Friendlist = () => {
  return (
    <div className='h-[320px]  w-full  mt-8'>
            <Searchbar/>
            <div className=' w-full h-full bg-red-100 mt-4 shadow-2xl rounded-xl'>
              <TitleSection title="Friends"/>

            <div className='h-[260px] overflow-y-scroll'>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
                <UserSection image={Profile} name="Friends Reunion" bia="Hi Guys, Wassup!"/>
               
            </div>
            </div>
          </div>
  )
}

export default Friendlist