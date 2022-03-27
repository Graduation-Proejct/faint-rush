import React from "react";
import Button from "../../components/library/Button";

export default function CTA() {
  return (
    <section className="flex flex-col justify-center items-center mt-16">
      <Button text="GET STARTED" />
      <p className="mt-2">
        <span className="text-sm font-semibold text-prim text-center">
          Already have an account?
        </span>
        <span className=" text-sec cursor-pointer pl-2 ">Sign In</span>
      </p>
    </section>
  );
}
