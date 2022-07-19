import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../api";
import Caroussel from "../components/Caroussel";

export default function Project() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projectsReducer[0]);
  useEffect(() => {
    dispatch(getProject(id));
  }, [dispatch, id]);
  if (project === undefined) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <h1 className="mt-6 ml-10 text-2xl">{project.libelle}</h1>
      <div className="md:h-96 mt-8 md:flex md:justify-around">
        <div className="md:w-6/12 w-full h-96">
          {project.imgs ? (
            <Caroussel images={project.imgs} />
          ) : (
            <p>No images yet</p>
          )}
        </div>
        <div className="w-full md:w-2/12">
          <h2>technologies:</h2>
          <div className=" flex">
            {project.technologies ? (
              project.technologies.map((technology, i) => {
                return (
                  <img
                    className="w-10 h-10"
                    src={`${process.env.REACT_APP_API_URL}/public/images/${technology.logo}`}
                    alt={technology.libelle}
                    key={i}
                  />
                );
              })
            ) : (
              <p>Pas de technologies associées</p>
            )}
          </div>
          <h2>Client:</h2>
          {project.customer !== undefined ? (
            <div className="flex justify-around items-center">
              <img
                className="w-10 h-10"
                src={`${process.env.REACT_APP_API_URL}/public/images/${project.customer.logo}`}
                alt={project.customer.libelle}
              />
              <p>{project.customer.libelle}</p>
            </div>
          ) : (
            <p>Pas de client associé</p>
          )}
        </div>
      </div>
      <h2 className="mt-6 ml-10 text-2xl">Description</h2>
      <p>{project.description}</p>
    </div>
  );
}
