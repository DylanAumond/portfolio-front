import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject, getProjects } from "../../api";
import FormProject from "../../components/admin/FormProject";

export default function ProjectsAdmin() {
  const projects = useSelector((state) => state.projectsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div>
      <FormProject />
      <div className=" grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {projects.map((project, i) => {
          return (
            <div key={i} className="flex items-center">
              <div
                className=" h-20 w-20 bg-center bg-cover"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${project.imgs[0]})`,
                }}
              ></div>
              <div>
                <p>{project.libelle}</p>
                <button
                  onClick={() => dispatch(deleteProject(project._id))}
                  className="bg-red-600 p-1 text-white text-sm"
                >
                  Delete
                </button>
                <Link
                  to={`/admin/projects/${project.libelle}`}
                  state={project}
                  className="bg-orange-600 p-1 text-white text-sm"
                >
                  Update
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
