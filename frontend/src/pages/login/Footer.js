import React from "react";
import "./Footer.css";

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
        <h1 class="dash">
          <span>or</span>
          <br />{" "}
        </h1>
        <div className="flex flex-col  gap-4 mt-8">
          <button className=" w-full  flex flex-row justify-between gap-3 items-center bg-blue-500 rounded-xl px-5 py-1">
            <p className="text-white uppercase font-semibold text-sm">
              Login with Facebook
            </p>{" "}
            <p className="font-bold text-white text-4xl font-pop ">f</p>
          </button>
          <button className=" w-full  flex flex-row justify-between gap-3 items-center bg-red-500 rounded-xl px-5 py-1">
            <p className="text-white uppercase font-semibold text-sm">
              Login with Google
            </p>{" "}
            <p className="font-bold text-white text-4xl font-pop capitalize">
              G
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
