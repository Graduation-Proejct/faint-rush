import React from "react";
import Button from "../../components/library/Button";
import Card from "../../components/library/Card";
import Logo from "../../components/SVG/Logo";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setUsername,
  setValid,
  setItemName,
  setItemRlation,
  setItemPhone,
  setPhone,
  setType,
} from "../../redux/userSlice";
import { setSignUpValue, setEditValue } from "../../redux/counterSlice";

export default function GetStarted() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // navigate to patient
  const getStartedForPatient = () => {
    dispatch(setType("patient"));
    dispatch(setSignUpValue(true));
    navigate("/signup");
    //todo dispatch action to set user type to patient
  };

  // navigate to caretaker

  const getStartedForCaretaker = () => {
    // for disply relation input in signup page
    dispatch(setType("caretaker"));
    dispatch(setSignUpValue(true));
    navigate("/signup");
    //todo dispatch action to set user type to caretaker
  };
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
            <Button
              handles={getStartedForPatient}
              text="Get started as Patient"
            />
          </Card>
        </div>
        <div className="w-11/12 2xs:mt-16">
          <Card>
            <p className="text-sec font-semibold pb-4">
              {" "}
              I'm a caretaker or a person on the emergency list.{" "}
            </p>
            <Button
              handles={getStartedForCaretaker}
              text="Get started as Caretaker"
            />
          </Card>
        </div>
      </section>
    </div>
  );
}
