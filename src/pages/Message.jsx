import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Message = () => {
  let data = useSelector(state=>state.activeuser.value)
  let navigate=useNavigate()
  
  useEffect(()=>{
      if(data==null){
        navigate("/login")
  
      }
      
  
    },[])
  

  return (
    <div>Message</div>
  )
}

export default Message