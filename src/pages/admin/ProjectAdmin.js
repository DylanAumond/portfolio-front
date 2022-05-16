import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProjects } from "../../api";

export default function ProjectAdmin() {
  const Projects = useSelector((state) => state.projectReducer);
  const location = useLocation();
  const dispatch = useDispatch();
  const project = Projects.find(
    (project) => project._id === location.state._id
  );
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div>
      <p>{project.libelle}</p>
      <div>
        <h2>technologies:</h2>
        <div>
          {project.technologies ? (
            project.technologies.map((technology, i) => {
              return (
                <div
                  key={i}
                  className="h-20 w-20 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(http://localhost:5000/public/images/${technology})`,
                  }}
                ></div>
              );
            })
          ) : (
            <p>No technologies</p>
          )}
        </div>
      </div>
    </div>
  );
}
