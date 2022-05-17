import React from "react";

import Logo from "../../components/SVG/Logo";
import Header from "./Header";
import Main from "./Main";

import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setUsername,
  setValid,
  setItemName,
  setItemRlation,
  setItemPhone,
} from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="pt-10 h-screen font-mon flex flex-col gap-5 2xs:gap-10 items-center  ">
      <Logo />
      <Header />
      <Main />
    </div>
  );
}
