import React from "react";

export default function Button(props) {
  const { text } = props;
  return (
    <>
      <button className="px-24 py-4 rounded-2xl bg-gradient-to-br from-green-300 to-prim text-white text-sm font-bold">
        {text}
      </button>
    </>
  );
}
