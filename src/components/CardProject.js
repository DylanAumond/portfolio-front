import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { PROJECT } from "../constant/Modal";

export default function CardProject({ project, index}) {
  // get the translations from home
  const { t } = useTranslation("Home");
  const dispatch = useDispatch();
  const [hover,setHover] = useState(false);
  const margin = `sm:pt-${(index%3)*8}`;
  if (margin === undefined) return (<p>Loading ...</p>)
  return (
    <div
      onMouseOver={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className={'w-full bg-cover bg-center cursor-pointer h-96 sm:h-60 lg:h-96 ' +`mt-${(index%3)*4}`}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${project.imgs[0]})`,
        //marginTop: (index%3)*4 + 'rem'
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
