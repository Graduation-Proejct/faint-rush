import React from "react";

import Button from "../../components/library/Button";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const navigateToPatientHome = (e) => {
    e.preventDefault();
    navigate("/patienthome");
  };
  //const [name, setName] = useState("");
  const handleSubmit = (event) => {};

  return (
    <>
      <form
        onSubmit={(e) => {
          navigateToPatientHome(e);
        }}
        className=" flex justify-center  flex-col  items-center   gap-4"
      >
        <div>
          <input
            required
            className=" justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
            type="text"
            name="email"
            placeholder="Enter your email"
          />
          <input
            required
            className="text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            type="password"
            name="password"
            placeholder="Password"
            start
          />
        </div>

        <Button text="LOGIN" />
      </form>
    </>
  );
}
