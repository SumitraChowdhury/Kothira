import React from 'react'
import Image from './Image'


const UserSection = ({image,name,bia}) => {
  return (
    <div className='flex justify-between items-center px-5 my-4'>
                <div className='flex gap-x-4 items-center'>
                  <div className='w-[65px] h-[65px] rounded-full'>
                    <Image className='rounded-full' src={image}/>
                  </div>
                  <div>
                    <h5 className='text-lg font-semibold'>{name}</h5>
                    <p className='text-sm font-normal'>{bia}</p>
                  </div>
                </div>
                <button className='bg-[#5F35F5] py-1 px-3 text-white font-bold rounded-md'>Join</button>
              </div>
  )
}

export default UserSection