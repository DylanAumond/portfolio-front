import React from "react";
import { useTranslation } from "react-i18next";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  const { t } = useTranslation("Footer");

  // get the current date
  const today = new Date();

  // extract the current year from the current date
  const year = today.getFullYear();

  return (
    <div className="h-auto static bottom-0 text-center bg-red text-white">
      <div className="sm:w-5/6 sm:m-auto sm:flex sm:justify-between sm:items-center w-full mt-4">
        {/* Social Networks */}
        <h1>DADEV</h1>
        <div>
          <h3>{t("Social")}:</h3>
          <div className="flex justify-around sm:w-full">
            {/* Linkedin */}
            <a
              className=" text-3xl"
              href="https://www.linkedin.com/in/dylan-aumond-0786b91b2/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>

            {/* GitHub */}
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

        {/* Location */}
        <div className="mt-5">
          <h3>{t("Location")}:</h3>
          <p>50480 Sainte Mere Eglise</p>
          <p>11 village de la coquerie</p>
          <p>France</p>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-10">
        Copyright {year} - {t("CreatedBy")} Dylan Aumond
      </p>
    </div>
  );
}
