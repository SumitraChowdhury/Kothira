import Grid from '@mui/material/Grid';
import LogImage from '../assets/logo.png'
import Image from '../components/Image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Login = () => {
  let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [emailerror, setEmailError] = useState('')
    let [passworderror, setPasswordError] = useState('')

    let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let lowercase=/^(?=.*[a-z])/
    let uppercase=/(?=.*[A-Z])/
    let digit=/(?=.*\d)/
    let special=/(?=.*[@$!%*?&])/
    let min_max=/[A-Za-z\d@$!%*?&]{8,}$/

    let handleSignUp = () => {
        if(!email) {
            setEmailError("Enter Your Email");
        }
        else if(!emailRegex.test(email)){
            setEmailError("Enter Valid Email");
            

        }
       
        if(!password) {
            setPasswordError("Enter Your Password");

        }
        if(email && emailRegex.test(email) && password){
            console.log("created account");
            
        }

       


    }
    let handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("")
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("")
    }
  return (
    <Grid container >
            <Grid size={6}>
                <div className='flex justify-end items-center h-full'>
                    <div className=' w-[560px] '>
                        <h2 className='text-34 text-primary font-bold font-nunito'>Login to your account!</h2>

                        <div className='mt-4 w-[40%] flex gap-x-2 items-center justify-center border border-gray-400 py-3 px-6 rounded'>
                          <FcGoogle />
                          <p>Login with Google</p>
                        </div>
                        


                        <TextField onChange={handleEmail} className='w-[70%] mt-10!' id="outlined-basic" label="Email Address" variant="outlined" />
                        {
                            emailerror && <p className='bg-red-500 py-2 px-3 text-white rounded mt-2 w-[70%]'>{emailerror}</p>
                        }

                       
                        <TextField onChange={handlePassword} className='w-[70%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
                         {
                            passworderror && <p className='bg-red-500 py-2 px-3 text-white rounded mt-2 w-[70%]'>{passworderror}</p>
                        }


                        <Button onClick={handleSignUp} className='bg-[#5F35F5]! py-3! w-[70%] mt-10! mb-5! rounded-full!' variant="contained">Login to Continue</Button>
                        <p className='ml-[100px] text-sm text-[#03014C] font-nunito font-normal'>Don’t have an account ?<span className='text-[#EA6C00] font-bold'> <Link to="/">Sign up</Link></span></p>

                    </div>
                </div>
            </Grid>
            <Grid size={6}>
                <Image className='w-full h-screen object-cover' src={LogImage} />

            </Grid>


        </Grid>
  )
}

export default Login