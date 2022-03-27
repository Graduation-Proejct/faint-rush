import React from "react";
import Logo from "../../components/SVG/Logo";
import Doctor from "../../components/SVG/Doctor";
import Header from "./Header";
import CTA from "./CTA";
export default function Splash() {
  return (
    <div className="pt-16 font-mon flex flex-col gap-10 lg:flex-row items-center lg:items-start lg:justify-center  ">
      <Logo />
      <Header />
      <section className="flex  justify-center">
        <Doctor />
      </section>
      <CTA />
    </div>
  );
}
