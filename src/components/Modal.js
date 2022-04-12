import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { ClOSEMODAL } from "../constant/Modal";

export default function Modal(props) {
  const dispatch = useDispatch();
  const modalShow = (show) => {
    if (show) {
      return "";
    } else {
      return "hidden";
    }
  };
  return (
    <div
      className={`h-1/2 w-1/2 bg-white z-20 fixed left-1/4 top-1/4 ${modalShow(
        props.state.show
      )}`}
    >
      <button onClick={() => dispatch({ type: ClOSEMODAL })}>X</button>
      {props.state.component}
    </div>
  );
}
