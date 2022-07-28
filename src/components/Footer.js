import React from "react";
import { useTranslation } from "react-i18next";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  const { t } = useTranslation("Footer"); 

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="h-40 static bottom-0 text-center">
      <div className="sm:flex sm:justify-around w-full mt-4">
        <div>
          <h3>{t('Social')}:</h3>
          <div className="flex justify-around sm:w-full">
            <a
              className=" text-3xl"
              href="https://www.linkedin.com/in/dylan-aumond-0786b91b2/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              className=" text-3xl"
              href="https://github.com/DylanAumond"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div>
          <h3>{t('Location')}:</h3>
          <p>50480 Sainte Mere Eglise</p>
          <p>11 village de la coquerie</p>
          <p>France</p>
        </div>
      </div>
      <p>Copyright {year} - {t('CreatedBy')} Dylan Aumond</p>
    </div>
  );
}
