import React from "react";
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
  setSignUpValue,
  setEditValue,
  setLoading,
} from "../../redux/counterSlice";
export default function Login() {
  const items = useSelector((state) => state.items);

  if (items.loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner />
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
