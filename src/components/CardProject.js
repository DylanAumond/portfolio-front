import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { PROJECT } from "../constant/Modal";

export default function CardProject({ project, index}) {
  // get the translations from home
  const { t } = useTranslation("Home");
  const dispatch = useDispatch();
  const [hover,setHover] = useState(false);
  return (
    <div
      onMouseOver={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className="h-full w-full bg-cover bg-center cursor-pointer"
      style={{
        backgroundColor: "blue",
        backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${project.imgs[0]})`,
        marginTop: (index%3)*4 + 'rem'
      }}
    >
      <div
      className="h-full w-full flex justify-center items-center"
      onClick={()=>dispatch({type: PROJECT, project})}
      style={ hover === true ? {backgroundColor:'rgba(255, 255, 255, 0.6)'} : {display: 'none'}}>
        <div style={{color:'black'}}>
          <p>{project.libelle}</p>
          <p>{t('SeeProject')}</p>
        </div>
      </div>
    </div>
  );
}
