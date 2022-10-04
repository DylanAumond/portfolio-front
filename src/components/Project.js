import React from "react";
import Caroussel from "./Caroussel";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Project = ({ project, index }) => {
  const { t, i18n } = useTranslation("Project");
  return (
    <div className="overflow-y-scroll overflow-x-hidden md:w-4/6 md:m-auto px-4 py-4">
      {/* Project libelle */}
      <h1 className="mb-5 sm:mb-0 sm:text-center">
        {project.libelle} {index}
      </h1>

      {/* Project caroussel */}
      {project.imgs ? (
        <Caroussel images={project.imgs} />
      ) : (
        <p>No images yet</p>
      )}

      {/* Project information */}
      <div className="mt-4 md:mt-0 ">
        {/* Left content */}
        <div className="sm:flex-1">
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
        <div className=" sm:w-full ">
          <h2>{t("Description")}:</h2>
          {/* Techno*/}
          <h2 className="sm:mt-2">{t("BuiltWith")}:</h2>
          <div className="sm:mt-4 sm:flex  sm:items-center ">
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
          <div className="flex justify-center items-center mt-6">
            <h2 className=" mr-7">{t("Customer")}:</h2>
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
    </div>
  );
};
