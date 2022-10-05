import React from "react";
import { useDispatch } from "react-redux";
import { ClOSEMODAL } from "../constant/Modal";

export default function Modal(props) {
  const dispatch = useDispatch();
  const modalStyle = {
    minHeight: "50%",
    maxHeight: "90%",
    minWidth: "50%",
    width: "inherit",
    maxWidth: "1000px",
    overflow: "scroll",
    transform: props.state.show
      ? "scale(1) translate(-50%, -50%)"
      : "scale(0) translate(50%, 100%)",
    opacity: props.state.show ? 1 : 0,
    transition: "all .4s",
    visibility: props.state.show ? "visible" : "hidden",
  };
  return (
    <div
      className={`bg-white border-2 border-solid shadow-2xl z-20 fixed left-1/2 top-1/2 rounded-lg`}
      style={modalStyle}
    >
      {/* ClOSEMODAL button */}
      <button
        className="absolute top-4 right-4 cursor-pointer z-10 text-red"
        onClick={() => dispatch({ type: ClOSEMODAL })}
      >
        X
      </button>
      {/* Modal's content*/}
      {props.state.component}
    </div>
  );
}
