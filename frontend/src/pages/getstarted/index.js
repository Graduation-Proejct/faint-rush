import React from "react";
import Button from "../../components/library/Button";
import Card from "../../components/library/Card";
import Logo from "../../components/SVG/Logo";
import Header from "./Header";
export default function GetStarted() {
  return (
    <div className="pt-10 h-screen font-mon flex flex-col gap-5 2xs:gap-10 items-center  ">
      <Logo />
      <Header />
      <section className="flex flex-col justify-center items-center mt-20 2xs:mt-32">
        <div className="w-11/12">
          <Card>
            <p className="text-sec font-semibold pb-4">
              I'm a patient who's prone to fainting at any time.
            </p>
            <Button text="Get started as Patient" />
          </Card>
        </div>
        <div className="w-11/12 2xs:mt-16">
          <Card>
            <p className="text-sec font-semibold pb-4">
              {" "}
              I'm a caretaker or a person on the emergency list.{" "}
            </p>
            <Button text="Get started as Caretaker" />
          </Card>
        </div>
      </section>
    </div>
  );
}
