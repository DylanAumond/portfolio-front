import React from "react";
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
      className={`h-fit lg:w-1/2 shadow-2xl sm:w-10/12 w-11/12 bg-white border-2 border-solid z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${modalShow(
        props.state.show
      )}`}
    >
      <button
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => dispatch({ type: ClOSEMODAL })}
      >
        X
      </button>
      {props.state.component}
    </div>
  );
}
