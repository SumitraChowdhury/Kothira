import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoSearchOutline } from 'react-icons/io5'

const Searchbar = () => {
  return (
    <div className='relative w-full rounded-xl bg-red-100'>
              <input className='py-3 pl-15 pr-10 shadow-2xl  w-full' type="text" placeholder='Search'/>
              <IoSearchOutline className='text-xl absolute top-1/2 left-4 -translate-y-1/2'/>
              <BsThreeDotsVertical className='text-xl absolute top-1/2 right-3 -translate-y-1/2'/>


            </div>
  )
}

export default Searchbar