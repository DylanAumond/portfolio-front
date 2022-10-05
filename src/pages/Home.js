import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { CONTACT } from "../constant/Modal";

import { getCustomers } from "../api/customers";
import { getProjects } from "../api/projects";
import { getTechnologies } from "../api/technologies";

import CardProject from "../components/CardProject";
import CustomerSlider from "../components/CustomerSlider";
import Technocard from "../components/Technocard";

export default function Home() {
  const dispatch = useDispatch();

  // get the translations from home
  const { t } = useTranslation("Home");

  // get the customers from the customers' reducer
  const { customers } = useSelector(state => state.customersReducer);
  // get the projects from the projects' reducer
  const { projects } = useSelector(state => state.projectsReducer);
  // get the technologies from the technologies' reducer
  const { technologies } = useSelector(state => state.technologiesReducer);

  // rehydrate the reducers on dispatch action
  useEffect(() => {
    dispatch(getCustomers());
    dispatch(getProjects());
    dispatch(getTechnologies());
  }, [dispatch]);

  return (
    <div>
      {/* Main banner */}
      <div className="w-full sm:h-480 sm:flex sm:justify-center sm:items-center">
        <div className="text-center">
          <img src={process.env.PUBLIC_URL + "/imgs/DADev.svg"} />
        </div>
        <div className="text-center -mt-16 sm:mt-0">
          <h1>{t("TextHome")}</h1>
          <button
            className="bg-red px-6 py-3 rounded-lg mt-6 text-sm"
            onClick={() => dispatch({ type: CONTACT })}
          >
            {t("GetInTouch")}
          </button>
        </div>
      </div>

      {/* cutomers' Section */}
      <div className="text-center mb-10 mt-16 sm:mt-0">
        {/* customer's section title */}
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Customers")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>

        {/* customers' carrousel */}
        {customers.length > 4 ? (
          <CustomerSlider customers={customers} />
        ) : (
          <div className="flex justify-around">
            {customers.map((customer, i) => {
              return (
                <div className="w-1/4" data-index={i} key={i}>
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 m-auto bg-center bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${customer.logo})`,
                    }}
                  ></div>
                  <p className=" text-xs">{customer.libelle}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Projects' Section */}
      <div className="text-black  sm:mx-8 mt-32">
        {/* Project's section tilte */}
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Projects")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>

        {/* Projects' list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-x-10 p-4 justify-center">
          {/* For each project */}
          {projects.map((project, index) => (
            <CardProject key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="bg-white mb-10 ">
        <div className="w-40 h-auto m-auto">
          <h2 className=" text-2xl">{t("Technology")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>
        <div className="flex flex-wrap  technocard">
          {technologies.map(technologie => {
            return (
              <Technocard key={technologie._id} technologie={technologie} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
