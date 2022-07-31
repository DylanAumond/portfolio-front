import React from "react";
import { useDispatch } from "react-redux";
import { PROJECT } from "../constant/Modal";

export default function CardProject({ project }) {
  const dispatch = useDispatch();
  return (
    <div
    onClick={()=> dispatch({type: PROJECT, project})}
      className="h-full bg-white w-full bg-cover bg-center flex justify-center items-center cursor-pointer	"
      style={{
        backgroundImage: `url(http://localhost:5000/public/images/${project.imgs[0]})`,
      }}
    >
      <p>{project.libelle}</p>
    </div>
  );
}
