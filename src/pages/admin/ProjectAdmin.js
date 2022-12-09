import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../../api/projects";
import FormProject from "../../components/admin/FormProject";
import { NavBar } from "../../components/admin/NavBar";

export default function ProjectAdmin() {
  const { id } = useParams();
  const { project } = useSelector(state => state.projectsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(id));
  }, [dispatch, id]);

  if (project === undefined) {
    return <p>loading ...</p>;
  }
  return (
    <div className="flex">
      <NavBar />
      <FormProject data={project} />
    </div>
  );
}
