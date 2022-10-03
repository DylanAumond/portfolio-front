import React from "react";
import Caroussel from "./Caroussel";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Project = ({ project }) => {
  const { t, i18n } = useTranslation("Project");
  return (
    <div className="overflow-y-scroll overflow-x-hidden py-4 px-4">
      {/* Project libelle */}
      <h1>{project.libelle}</h1>

      {/* Project caroussel */}
      {project.imgs ? (
        <Caroussel images={project.imgs} />
      ) : (
        <p>No images yet</p>
      )}

      {/* Project information */}
      <div className="sm:flex mt-4  sm:w-full  sm:justify-between sm:items-center ">
        {/* Left content */}
        <div className="sm:flex-1 sm:ml-10">
          <h2>{t("Description")}:</h2>
          <p className="my-2">{project.description[i18n.language]}</p>
          {/* Tasks */}
          <h2>{t("Tasks")}:</h2>
          {project.tasks.map((task, index) => (
            <div key={index} className="flex items-center">
              <FaCheck style={{ fontSize: "8px" }} className="mx-4" />
              <p>{task[i18n.language]}</p>
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className=" sm:w-1/3 sm:ml-10 sm:text-center ">
          <h2>{t("Description")}:</h2>
          {/* Techno*/}
          <h2 className="sm:mt-4">{t("BuiltWith")}:</h2>
          <div className="sm:flex sm:justify-center ">
            {/* For each technology create a card */}
            {project.technologies ? (
              project.technologies.map((technology, i) => {
                return (
                  <img
                    className="h-10"
                    src={`${process.env.REACT_APP_API_URL}/public/images/${technology.logo}`}
                    alt={technology.libelle}
                    key={i}
                  />
                );
              })
            ) : (
              <p>Pas de technologies associées</p>
            )}
          </div>

          {/*Client */}
          <h2 className="sm:mt-4">{t("Customer")}:</h2>
          {project.customer !== undefined ? (
            <div className="flex items-center justify-center">
              <img
                className="w-10 h-10"
                src={`${process.env.REACT_APP_API_URL}/public/images/${project.customer.logo}`}
                alt={project.customer.libelle}
              />
              <p>{project.customer.libelle}</p>
            </div>
          ) : (
            <p>Pas de client associé</p>
          )}
        </div>
      </div>
    </div>
  );
};
