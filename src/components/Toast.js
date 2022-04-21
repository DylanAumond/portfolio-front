import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TOAST } from "../constant/toasts";

export default function Toast({ text, color, id }) {
  const dispatch = useDispatch();
  return (
    <div className={`bg-${color} text-white flex justify-between`}>
      <p>{text}</p>
      <button onClick={() => dispatch({ type: DELETE_TOAST, payload: id })}>
        X
      </button>
    </div>
  );
}
