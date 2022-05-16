import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCustomers, getProjects, getTechnologies } from "../api";
import CardProject from "../components/CardProject";
import CustomerSlider from "../components/CustomerSlider";
import Technocard from "../components/Technocard";

export default function Home() {
  const dispatch = useDispatch();

  const customers = useSelector((state) => state.customersReducer);
  const projects = useSelector((state) => state.projectsReducer);
  const technologies = useSelector((state) => state.technologiesReducer);

  useEffect(() => {
    dispatch(getCustomers());
    dispatch(getProjects());
    dispatch(getTechnologies());
  }, [dispatch]);
  return (
    <div>
      <div className="w-full h-screen flex">
        <div className="h-full w-1/2 bg-red-800 flex flex-col justify-center items-center">
          <div>
            <h1 className="text-3xl">
              Dylan <br /> Aumond
            </h1>
            <p>Développeur FullStack Junior</p>
          </div>
        </div>
        <div className="h-full w-1/2 bg-blue-800">
          <p>sqd</p>
        </div>
      </div>

      <div className="bg-black-light h-fit sm:h-96 text-white text-center">
        <h2 className="mb-2">Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 h-96 sm:h-5/6 gap-y-12 sm:gap-x-12">
          {projects.map((project) => (
            <CardProject key={project._id} project={project} />
          ))}
        </div>
        <Link to={`/projects`} className="bg-white text-black-light mt-4">
          Voir plus
        </Link>
      </div>

      <div className="h-fit text-center">
        <h2>Clients</h2>
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
                      backgroundImage: `url(http://localhost:5000/public/images/${customer.logo})`,
                    }}
                  ></div>
                  <p className=" text-xs">{customer.libelle}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bg-black-light grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 py-6">
        {technologies.map((technologie) => {
          return <Technocard key={technologie._id} technologie={technologie} />;
        })}
      </div>
    </div>
  );
}
