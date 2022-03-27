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
      <section>
        <Card>
          I'm a patient who's prone to fainting at any time.
          <Button text="Get started as Patient" />
        </Card>
        <Card>
          I'm a caretaker or a person on the emergency list.{" "}
          <Button text="Get started as CareTaker" />
        </Card>
      </section>
    </div>
  );
}
