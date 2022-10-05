import React from "react";
import { useTranslation } from "react-i18next";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { CGU } from "../constant/Modal";

export default function Footer() {
  const dispatch = useDispatch();
  const { t } = useTranslation("Footer");

  // get the current date
  const today = new Date();

  // extract the current year from the current date
  const year = today.getFullYear();

  return (
    <div className="h-auto w-full static bottom-0 mt-32 text-center bg-red text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 h-96 sm:h-5/6 gap-y-4 sm:gap-x-10 p-4 justify-center items-center">
        {/* Social Networks */}
        <h1>DADEV</h1>
        <div>
          <h3>{t("Social")}:</h3>
          <div className="flex justify-center sm:w-full">
            {/* Linkedin */}
            <a
              className=" text-3xl mr-10"
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
      <p className="cursor-pointer" onClick={() => dispatch({ type: CGU })}>
        CGU
      </p>
    </div>
  );
}
