import React, { Children } from "react";

export default function Card(props) {
  return <div className=" rounded-2xl px-5 py-6  drop-shadow-2xl shadow-xl">{props.children}</div>;
}
