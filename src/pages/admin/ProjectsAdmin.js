import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject, getProjects } from "../../api/projects";
import NavBar from "../../components/admin/NavBar";

export default function ProjectsAdmin() {
  const dispatch = useDispatch();

  // data from the project redcucer
  const { projects } = useSelector(state => state.projectsReducer);

  // on dispatch change the project reducer value
  useEffect(() => {
    // hydrate the project reducer with all the projects
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div className="flex">
      <NavBar />
      <div>
        <h1 className="text-center text-xl">Projects</h1>
        <div className="mt-8 flex flex-wrap gap-6 ">
          {projects.map((project, i) => {
            return (
              <div key={i} className="flex">
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
                    className="bg-red p-1 text-white text-sm"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/admin/projects/${project._id}`}
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
    </div>
  );
}
