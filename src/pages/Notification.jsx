import React from 'react'

const Notification = () => {
  let data = useSelector(state=>state.activeuser.value)
  let navigate=useNavigate()
  
  useEffect(()=>{
      if(data==null){
        navigate("/login")
  
      }
      
  
    },[])
    
  return (
    <div>Notification</div>
  )
}

export default Notification