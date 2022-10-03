import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
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
      <div className="w-full h-screen flex justify-center">
        <div className="text-center h-96">
          <img src={process.env.PUBLIC_URL + "/imgs/DADev.svg"} />
          <button className=" bg-red px-8 py-3 rounded-lg text-white ">
            View More
          </button>
        </div>
      </div>

      <div className="text-center mb-10">
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Customers")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>
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

      <div className="bg-white h-fit sm:h-screen text-black mt-32">
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Projects")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-6 h-96 sm:h-5/6 gap-y-4 sm:gap-x-12 p-4 justify-center">
          {projects.map(project => (
            <CardProject key={project._id} project={project} />
          ))}
        </div>
      </div>

      <div className="bg-white mb-10 mt-10">
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Technology")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>
        <div className="flex flex-wrap py-6">
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
