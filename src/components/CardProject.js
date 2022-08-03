import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PROJECT } from "../constant/Modal";

export default function CardProject({ project }) {
  const dispatch = useDispatch();
  const [hover,setHover] = useState(false);
  return (
    <div
      onMouseOver={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className="h-full w-full bg-cover bg-center cursor-pointer"
      style={{
        backgroundImage: `url(http://localhost:5000/public/images/${project.imgs[0]})`,
      }}
    >
      <div
      className="h-full w-full flex justify-center items-center"
      onClick={()=>dispatch({type: PROJECT, project})}
      style={ hover === true ? {backgroundColor:'rgba(255, 255, 255, 0.6)'} : {display: 'none'}}>
        <div style={{color:'black'}}>
          <p>{project.libelle}</p>
          <p>voir le projet</p>
        </div>
      </div>
    </div>
  );
}
