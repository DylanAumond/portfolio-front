import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getProjects, getTechnologies } from "../api";
import CardProject from "../components/CardProject";
import CustomerSlider from "../components/CustomerSlider";
import Technocard from "../components/Technocard";

export default function Home() {
  const customers = useSelector((state) => state.customersReducer);
  const projects = useSelector((state) => state.projectsReducer);
  const technologies = useSelector((state) => state.technologiesReducer);
  const dispatch = useDispatch();

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

      <div className="bg-black-light h-96 text-white text-center">
        <h2>Projects</h2>
        <div className="grid grid-cols-3 h-5/6 justify-around">
          {projects.map((project) => {
            return <CardProject key={project._id} project={project} />;
          })}
        </div>
        <button className="bg-white text-black-light">Show More</button>
      </div>

      <div className="h-40 text-center">
        <h2>Clients</h2>
        <CustomerSlider customers={customers} />
      </div>

      <div className="bg-black-light grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
        {technologies.map((technologie) => {
          return <Technocard key={technologie._id} technologie={technologie} />;
        })}
      </div>
    </div>
  );
}
