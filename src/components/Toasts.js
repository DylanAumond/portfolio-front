import React from "react";
import Toast from "./Toast";

export default function Toasts(props) {
  const toasts = props.state;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 fixed right-0">
      {/* For each toast create an item */}
      {toasts.map((toast, i) => {
        return (
          <Toast
            key={i}
            text={toast.text}
            color={toast.color}
            icon={toast.icon}
            id={i}
          />
        );
      })}
    </div>
  );
}
