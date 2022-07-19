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
      className={`bg-white border-2 border-solid shadow-2xl z-20 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${modalShow(
        props.state.show
      )}`}
      style={{ maxHeight: '90%', width: 'inherit' ,maxWidth: '1000px', overflow: 'scroll' }}
    >
      {/* ClOSEMODAL button */}
      <button
        className="absolute top-4 right-4 cursor-pointer z-10"
        onClick={() => dispatch({ type: ClOSEMODAL })}
      >
        X
      </button>
      {/* Modal's content*/}
      {props.state.component}
    </div>
  );
}
