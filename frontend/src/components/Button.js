import React, { useEffect, useState } from "react";

export default function Button(props) {
  const [header, setHeader] = useState("hello world");
  const { title } = props;
  const handleClick = () => {
    setHeader("hey mo0mo");
  };

  return (
    <>
      <h1>{header}</h1>
      <button
        onClick={handleClick}
        className="bg-red-100 rounded py-1 px-3 mt-10 hover:bg-red-300 transition text-gray-600"
      >
        {title}
      </button>
    </>
  );
}
