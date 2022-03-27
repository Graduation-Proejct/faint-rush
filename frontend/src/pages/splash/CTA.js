import React from "react";
import Button from "../../components/library/Button";
import { useNavigate } from "react-router-dom";
export default function CTA() {
  const navigate = useNavigate();
  const navigateToGetStarted = () => {
    navigate("/getstarted");
  };
  const navigateToSingIn = () => {
    navigate("/login");
  };
  return (
    <section className="flex flex-col justify-center items-center mt-8 2xs:mt-16">
      <Button text="GET STARTED" handles={navigateToGetStarted} />
      <p className="mt-2">
        <span className="text-sm font-semibold text-prim text-center">
          Already have an account?
        </span>
        <span
          onClick={navigateToSingIn}
          className=" text-sec cursor-pointer pl-2 "
        >
          Sign In
        </span>
      </p>
    </section>
  );
}
