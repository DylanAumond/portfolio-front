import React from "react";
import { Link } from "react-router-dom";

export default function CardProject({ project }) {
  return (
    <Link
      to={`/project/${project.libelle}/${project._id}`}
      className="h-full bg-white w-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(http://localhost:5000/public/images/${project.imgs[0]})`,
      }}
    >
      <p>{project.libelle}</p>
    </Link>
  );
}
