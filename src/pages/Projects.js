import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../api";
import CardProject from "../components/CardProject";

export default function Projects() {
  const projects = useSelector((state) => state.projectsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div>
      <h1>Pojects</h1>
      <div className=" h-72 grid grid-cols-3 gap-10 mx-8">
        {projects.map((project, i) => (
          <CardProject key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
