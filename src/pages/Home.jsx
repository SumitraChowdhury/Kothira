import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';

import Grouplist from '../layouts/Grouplist';
import Friendlist from '../layouts/Friendlist';
import Userlist from '../layouts/Userlist';
import Friendrequest from '../layouts/Friendrequest';
import Mygrouplist from '../layouts/Mygrouplist';
import Blockuserlist from '../layouts/Blockuserlist';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  let data = useSelector(state=>state.activeuser.value)
  let navigate=useNavigate()
  
  useEffect(()=>{
    if(data==null){
      navigate("/login")
    }
  },[])
  
  return (
     <Grid container spacing={2}>
        <Grid size={4}>
         <Grouplist/>
        </Grid>
        <Grid size={4}>
         <Friendlist/>
        </Grid>
        <Grid size={4}>
         <Userlist/>
        </Grid>
        <Grid size={4}>
         <Friendrequest/>
        </Grid>
        <Grid size={4}>
         <Mygrouplist/>
        </Grid>
        <Grid size={4}>
         <Blockuserlist/>
        </Grid>
       
      </Grid>
  
  
    
  )
}

export default Home