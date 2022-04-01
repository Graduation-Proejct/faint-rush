import React from "react";
import './Footer.css'
import { ReactComponent as FB } from "../../assets/svgs/facebook.svg"

import { useState } from "react";
import Button from "../../components/library/Button";
export default function Footer() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {

    setPasswordShown(!passwordShown);
  };
  return (
    <>

      <div className=" flex justify-center flex-col  items-center">
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />




        <h1 class="dash"><span>or</span><br /> </h1>
        <button className="flex flex-row justify-around items-center bg-blue-500"><span>Login with Facebook</span> <div className="bg-red-500 flex  "><FB className="justify-center items-center w-18 h-auto"/></div> </button>





      </div>
    </>
  );
}
