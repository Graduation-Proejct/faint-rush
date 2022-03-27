import React from "react";
import Logo from "../../components/SVG/Logo";
import Doctor from "../../components/SVG/Doctor";
import Header from "./Header";
import CTA from "./CTA";
export default function Splash() {
  return (
    <div className="pt-10 h-screen font-mon flex flex-col gap-5 2xs:gap-10 items-center  ">
      <Logo />
      <Header />
      <section className="flex  justify-center">
        <Doctor />
      </section>
      <CTA />
    </div>
  );
}
