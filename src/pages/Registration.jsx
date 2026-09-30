import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "../components/Image";
import RegImage from "../assets/reg.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  let [emailerror, setEmailError] = useState("");
  let [nameerror, setNameError] = useState("");
  let [passworderror, setPasswordError] = useState("");
  let [loader, setLoader] = useState(false);

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let lowercase = /^(?=.*[a-z])/;
  let uppercase = /(?=.*[A-Z])/;
  let digit = /(?=.*\d)/;
  let special = /(?=.*[@$!%*?&])/;
  let min_max = /[A-Za-z\d@$!%*?&]{8,}$/;

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  let handleSignIn = () => {
    if (!email) {
      setEmailError("Enter Your Email");
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter Valid Email");
    }
    if (!name) {
      setNameError("Enter Your Name");
    }
    if (!password) {
      setPasswordError("Enter Your Password");
    }
    if (email && emailRegex.test(email) && name && password) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          toast.success("Registration completed");

          setTimeout(() => {
            navigate("/home");
          }, 3000);
          setLoader(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

          if (errorCode.includes("auth/email-already-in-use")) {
            toast.error("The Email is Already used");
          } else if (errorCode.includes("auth/weak-password")) {
            setPasswordError("Minimum 6 digit required");
          } else if (errorCode.includes("auth/too-many-requests")) {
            toast.error("Try Later");
          }
        });

      console.log("Login account");
    }
  };

  return (
    <Grid container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Grid size={6}>
        <div className="flex justify-end items-center h-full">
          <div className=" w-[560px] ">
            <h2 className="text-34 text-primary font-bold font-nunito">
              Get started with easily register
            </h2>
            <p className="text-lg text-black/50 font-normal font-nunito">
              Free register and you can enjoy it
            </p>
            <TextField
              onChange={handleEmail}
              className="w-[70%] mt-10!"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            {emailerror && (
              <p className="bg-red-500 py-2 px-3 text-white rounded mt-2 w-[70%]">
                {emailerror}
              </p>
            )}
            <TextField
              onChange={handleName}
              className="w-[70%] mt-5!"
              id="outlined-basic"
              label="Ful name"
              variant="outlined"
            />
            {nameerror && (
              <p className="bg-red-500 py-2 px-3 text-white rounded mt-2 w-[70%]">
                {nameerror}
              </p>
            )}
            <TextField
              onChange={handlePassword}
              className="w-[70%] mt-5!"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            {passworderror && (
              <p className="bg-red-500 py-2 px-3 text-white rounded mt-2 w-[70%]">
                {passworderror}
              </p>
            )}

            {loader ? (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : (
              <Button
                onClick={handleSignIn}
                className="bg-[#5F35F5]! py-3! w-[70%] mt-10! mb-5! rounded-full!"
                variant="contained"
              >
                Sign up
              </Button>
            )}

            <p className="ml-[100px] text-sm text-[#03014C] font-nunito font-normal">
              Already have an account ?{" "}
              <span className="text-[#EA6C00] font-bold">
                <Link to="/login">Sign In</Link>
              </span>
            </p>
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
