import React from "react";
import { Link } from "react-router-dom";

export default function CardProject({ project }) {
  return (
    <Link
      to={`/project/${project.libelle}`}
      state={project.libelle}
      key={project._id}
      className="h-full bg-white w-1/4"
    >
      <p>{project.libelle}</p>
    </Link>
  );
}
