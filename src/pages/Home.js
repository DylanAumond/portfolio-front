import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getProjects, getTechnologies } from "../api";
import CustomerSlider from "../components/CustomerSlider";

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
      <div className="w-full h-96 flex">
        <div className="h-full w-1/2 bg-red-800">
          <h1>Dylan Aumond</h1>
          <p>Developer FullStack Junior</p>
        </div>
        <div className="h-full w-1/2 bg-blue-800">
          <p>sqd</p>
        </div>
      </div>

      <div className="bg-black-light h-96 text-white">
        <h2>Projects</h2>
        {projects.map((project) => {
          return (
            <div key={project._id}>
              <p>{project.libelle}</p>
            </div>
          );
        })}
        <button className="bg-white text-black-light">Show More</button>
      </div>

      <div className="h-40">
        <h2>Customers</h2>
        <CustomerSlider customers={customers} />
      </div>

      <div className="bg-black-light text-white h-96">
        {technologies.map((technologie) => {
          return (
            <div key={technologie._id}>
              <p>{technologie.libelle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
