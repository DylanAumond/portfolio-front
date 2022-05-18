import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TOAST } from "../constant/toasts";
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiFillInfoCircle,
  AiFillWarning,
} from "react-icons/ai";

export default function Toast({ text, color, id, icon }) {
  const dispatch = useDispatch();
  const displayIcon = (icon) => {
    switch (icon) {
      case "checked":
        return <AiFillCheckCircle className="w-8 h-8" />;
      case "error":
        return <AiFillExclamationCircle className="w-8 h-8" />;
      case "info":
        return <AiFillInfoCircle className="w-8 h-8" />;
      case "warning":
        return <AiFillWarning className="w-8 h-8" />;
      default:
        return <AiFillWarning className="w-8 h-8" />;
        break;
    }
  };
  return (
    <div
      className={`bg-${color} rounded-lg my-4 mr-2 text-white flex justify-around items-center h-12`}
    >
      {displayIcon(icon)}
      <p>{text}</p>
      <button onClick={() => dispatch({ type: DELETE_TOAST, payload: id })}>
        X
      </button>
    </div>
  );
}
