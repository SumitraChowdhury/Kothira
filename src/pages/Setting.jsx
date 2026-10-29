import React from 'react'

const Setting = () => {
let data = useSelector(state=>state.activeuser.value)
  let navigate=useNavigate()
  
  useEffect(()=>{
      if(data==null){
        navigate("/login")
  
      }
      
  
    },[])

  return (
    <div>Setting</div>
  )
}

export default Setting