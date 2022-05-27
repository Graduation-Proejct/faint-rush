import React, { useEffect } from "react";
import Button from "../../components/library/Button";
import Card from "../../components/library/Card";
import Logo from "../../components/SVG/Logo";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Spinner } from "../../assets/svgs/spinner.svg";

import {
  setEmail,
  setPassword,
  setPhone,
  setType,
  setUsername,
  setValid,
  setList,
} from "../../redux/userSlice";
import {
  setSignUpValue,
  setEditValue,
  setLoading,
} from "../../redux/counterSlice";
export default function Login() {
  const items = useSelector((state) => state.items);
  const user = useSelector((state) => state.user);

  if (items.loading) {
    return (
      <div className=" flex flex-col gap-5">
        <div className="flex h-screen flex-col  justify-center  ">
          <div className="  justify-center">
            <Spinner />
          </div>
        </div>
       
      </div>
    );
  }

  return (
    <div className="pt-10 h-screen font-mon flex flex-col gap-5 2xs:gap-10 items-center  ">
      <Logo />
      <Header />

      <Main />
      <Footer />
    </div>
  );
}
