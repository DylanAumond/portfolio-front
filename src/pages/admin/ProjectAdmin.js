import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProjects } from "../../api";
import FormProject from "../../components/admin/FormProject";

export default function ProjectAdmin() {
  const Projects = useSelector((state) => state.projectsReducer);
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
      <FormProject data={project}/>
    </div>
  );
}
