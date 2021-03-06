import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <span className="text-xl font-bold text-sec">
            <span className="text-prim text-1.5xl">Log in</span>
          </span>
        </h1>
      </header>
      <section className="flex justify-center">
        <p className="w-4/6 text-sm font-semibold text-prim text-center block">
          Enter your login details to access your account.
        </p>
      </section>
    </>
  );
}
