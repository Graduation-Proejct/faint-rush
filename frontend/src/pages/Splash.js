import React from "react";
import Logo from "../components/SVG/Logo";
import Doctor from "../components/SVG/Doctor";
import Button from "../components/library/Button";
export default function Splash() {
  return (
    <div className="pt-16 font-mon flex flex-col gap-10 lg:flex-row items-center lg:items-start lg:justify-center  ">
      <Logo />
      <header>
        <h1>
          <span className="text-xl font-bold text-sec">
            Welcome to <span className="text-prim text-1.5xl">Faint Rush</span>
          </span>
        </h1>
      </header>
      <section className="flex justify-center">
        <p className="w-4/6 text-sm font-semibold text-prim text-center">
          Faint detection system to keep an eye out on your loved ones.{" "}
        </p>
      </section>
      <section className="flex  justify-center">
        <Doctor />
      </section>
      <section className="flex flex-col justify-center items-center mt-16">
        <Button text="GET STARTED" />
        <p className="mt-2">
          <span className="text-sm font-semibold text-prim text-center">
            Already have an account?
          </span>
          <span className=" text-sec cursor-pointer pl-2 ">Sign In</span>
        </p>
      </section>
    </div>
  );
}
