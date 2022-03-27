import React from "react";
import Logo from "../components/shared/Logo";
export default function Splash() {
  return (
    <div className="pt-16 font-mon flex flex-col gap-10 lg:flex-row items-center lg:items-start lg:justify-center  ">
      <Logo />
      <h1>
        <span className="text-xl font-bold text-gray-700">
          Welcome to <span className="text-prim">Faint Rush</span>
        </span>
      </h1>
    </div>
  );
}
