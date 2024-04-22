import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn,setisSignIn]=useState(true)


  let toggleSignInForm=()=>{
    setisSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="body"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-bold text-3xl p-4">{isSignIn?"Sign In":"SignUp"}</h1>
       
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="p-2 m-4 w-full bg-gray-800"
         
        />}
         {!isSignIn && <input
          type="text"
          placeholder="Phone No."
          className="p-2 m-4 w-full bg-gray-800"
         
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-4 w-full bg-gray-800"
         
        />
        <input type="text" placeholder="Password" className="p-2 m-4 w-full bg-gray-800" />
        <button className="p-2 m-4 bg-red-700 w-full rounded-lg">{isSignIn?"Sign In":"SignUp"}</button>
        <p className="p-4 curser-pointer" onClick={toggleSignInForm}>{isSignIn?"New to Netflix? Sign Up Now":"Already a User ! Sign In Now..."}</p>
      </form>
    </div>
  );
};

export default Login;
