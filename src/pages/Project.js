import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProject } from "../api";

export default function Project() {
  const location = useLocation();
  const project = useSelector((state) => state.projectReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(location.state));
  }, [dispatch]);

  return (
    <div>
      <h1>{project.libelle}</h1>
    </div>
  );
}
