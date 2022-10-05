import React from "react";
import Caroussel from "./Caroussel";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Project = ({ project, index }) => {
  const { t, i18n } = useTranslation("Project");
  return (
    <div className="overflow-y-scroll overflow-x-hidden md:m-auto px-4 py-4">
      {/* Project libelle */}
      <div className="w-full h-auto m-auto">
        <h1 className=" text-xl mb-5 sm:mb-0">
          {project.libelle} {index}
        </h1>
        <div className="h-1  bg-red w-8 mb-5 "></div>
      </div>

      <div className="sm:flex sm:justify-around sm:items-center">
        {/* Project caroussel */}
        <div className="sm:w-2/4 m-auto ">
          {project.imgs ? (
            <Caroussel images={project.imgs} />
          ) : (
            <p>No images yet</p>
          )}
        </div>

        {/* Project information */}
        <div className="mt-4 ml-10 sm:w-2/4 ">
          {/* Left content */}
          <div className="sm:flex-1">
            <div className="w-40 h-auto">
              <h2 className=" text-xl">{t("Description")}</h2>
              <div className="h-1 bg-red w-8 mb-5 "></div>
            </div>

            <p className="my-2">{project.description[i18n.language]}</p>

            {/* Tasks */}
            <h2 className="mt-5 mb-5">{t("Tasks")}:</h2>
            {project.tasks.map((task, index) => (
              <div key={index} className="flex items-center">
                <FaCheck style={{ fontSize: "8px" }} className="mx-4" />
                <p>{task[i18n.language]}</p>
              </div>
            ))}
          </div>

          {/* Right content */}
          <div className=" sm:w-full ">
            {/* Techno*/}
            <div className="mt-5 sm:mt-0 sm:flex sm:items-center">
              <h2 className="sm:mt-2 ">{t("BuiltWith")}:</h2>
              <div className="mt-4 flex items-center ">
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
    </div>
  );
};
