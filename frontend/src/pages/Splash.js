import React from "react";
import Button from "../components/Button";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../redux/userSlice";
import { increment } from "../redux/counterSlice";
export default function Splash() {
  const username = useSelector((state) => state.counter.value);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  console.log(email);
  return (
    <div className=" flex flex-col lg:flex-row gap-7 justify-center items-center mt-10 lg:mt-40 ">
      <Logo />

      <h1 className="text-red-500 text-5xl">{email}</h1>
      <Button title={"Login"} />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  );
}
