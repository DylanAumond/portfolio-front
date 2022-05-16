import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../api";

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
        <div className="md:w-6/12 w-10/12">
          {project.imgs ? (
            project.imgs.map((img, i) => {
              return (
                <div
                  key={i}
                  className=" h-96 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(http://localhost:5000/public/images/${img})`,
                  }}
                ></div>
              );
            })
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
                  <div
                    key={i}
                    className="h-10 w-10 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(http://localhost:5000/public/images/${technology.logo})`,
                    }}
                  ></div>
                );
              })
            ) : (
              <p>Pas de technologies associées</p>
            )}
          </div>
        </div>
      </div>
      <h2 className="mt-6 ml-10 text-2xl">Description</h2>
      <p>{project.description}</p>
    </div>
  );
}
