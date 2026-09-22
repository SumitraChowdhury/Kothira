import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from "../components/Image";
import RegImage from "../assets/reg.png";

const Registration = () => {
  return (
    <Grid container>
      <Grid size={6}>
        <div className='flex justify-end items-center h-full'>
          <div className="w-[570px]">
            <h2 className='text-34 text-primary font-bold font-nunito'>Get started with easily register</h2>
            <p className='text-lg text-black/50 font-normal font-nunito pt-3'>Free register and you can enjoy it</p>
            <TextField className=' w-[80%] mt-5!' id="outlined-basic" label="Email Address" variant="outlined" />
            <TextField className=' w-[80%] mt-5!' id="outlined-basic" label="Ful name" variant="outlined" />
            <TextField className=' w-[80%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
            <Button className='bg-[#5F35F5]! w-[70%] mt-10! mb-5! rounded-full!' variant="contained">Sign up</Button>
            <p className='text-14 text-secondary font-opensans'>Already have an account ? <span className='text-third'>Sign In</span></p>
          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image className="w-full h-screen object-cover" src={RegImage} />
      </Grid>
    </Grid>
  );
};

export default Registration;
