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
    <div className={`mt-${(index%3)*8}`}>
      <div
        onMouseOver={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className='relative w-full bg-cover bg-center cursor-pointer h-96 sm:h-60 lg:h-96'
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${project.imgs[0]})`,
        }}
      >

        <div className="absolute -top-4 -left-4">
          <div className="w-6 h-2 bg-red"></div>
          <div className="w-2 h-4 bg-red"></div>
        </div>

        <div className="absolute -bottom-4 -right-4 rotate-180">
          <div className="w-6 h-2 bg-red"></div>
          <div className="w-2 h-4 bg-red"></div>
        </div>

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
    </div>
  );
}
