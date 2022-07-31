import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  const {customers} = useSelector((state) => state.customersReducer);
  // get the projects from the projects' reducer
  const projects = useSelector((state) => state.projectsReducer);
  // get the technologies from the technologies' reducer
  const {technologies} = useSelector((state) => state.technologiesReducer);

  // rehydrate the reducers on dispatch action
  useEffect(() => {
    dispatch(getCustomers());
    dispatch(getProjects());
    dispatch(getTechnologies());
  }, [dispatch]);

  return (
    <div>
      <div
        className="w-full h-screen flex bg-center bg-cover items-center justify-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=1380&t=st=1659210934~exp=1659211534~hmac=1b8dac234411a0b2d1ee6ac36cee1833660d0df2a6ea6e9112bd6c124ba7df34)",
        }}
      >
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-8xl">Dylan Aumond</h1>
          <p className="text-2xl md:text-4xl">{t('Developer')} FullStack Junior</p>
        </div>
      </div>

      <div className="bg-black-light h-fit sm:h-96 text-white text-center">
        <h2 className="mb-2">{t('Projects')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 h-96 sm:h-5/6 gap-y-4 sm:gap-x-12 p-4 justify-center">
          {projects.map((project) => (
            <CardProject key={project._id} project={project} />
          ))}
        </div>
        <Link to={`/projects`} className="bg-white text-black-light mt-4">
          {t('ShowMore')}
        </Link>
      </div>

      <div className="text-center">
        <h2>{t('Customers')}</h2>
        {customers.length > 4 ? (
          <CustomerSlider customers={customers} />
        ) : (
          <div className="flex justify-around">
            {customers.map((customer, i) => {
              return (
                <div className="w-1/4" data-index={i} key={i}>
                  <div
                    className="w-16 h-16 md:w-32 md:h-32 m-auto bg-center bg-cover"
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

      <div className="bg-black-light grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 py-6 justify-center">
        {technologies.map((technologie) => {
          return <Technocard key={technologie._id} technologie={technologie} />;
        })}
      </div>
    </div>
  );
}
