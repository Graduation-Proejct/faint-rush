import React from "react";
import Button from "../../components/library/Button";
import Card from "../../components/library/Card";
import Logo from "../../components/SVG/Logo";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { useNavigate } from "react-router-dom";
export default function Login() {
  
  return (
    <div className="pt-10 h-screen font-mon flex flex-col gap-5 2xs:gap-10 items-center  ">
      <Logo />
      <Header />

      <Main />
      <Footer />
    </div>
  );
}
