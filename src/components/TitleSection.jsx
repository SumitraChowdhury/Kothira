import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const TitleSection = ({title}) => {
  return (
    <div className='flex justify-between px-5 py-4'>
                    <h3 className='text-xl font-bold'>{title}</h3>
                      <BsThreeDotsVertical className='text-xl'/>
                  </div>
  )
}

export default TitleSection