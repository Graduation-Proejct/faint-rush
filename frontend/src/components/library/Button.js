import React from "react";

export default function Button(props) {
  const { text, handles } = props;
  return (
    <>
      <button onClick={handles  } className="px-24 py-4 rounded-2xl bg-gradient-to-br from-grdstart to-prim text-white text-sm font-bold">
        <span className="">{text}</span>
      </button>
    </>
  );
}
