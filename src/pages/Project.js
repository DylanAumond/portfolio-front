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
      <h1 className="mt-6 ml-10 text-2xl">{project.libelle}</h1>
      <div className="h-96 mt-8 flex justify-around">
        <div className="w-6/12">
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
        <div className=" w-2/12">
          <h2>technologies:</h2>
          <div>
            {project.technologies ? (
              project.technologies.map((technology, i) => {
                return (
                  <div
                    key={i}
                    className="h-20 w-20 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(http://localhost:5000/public/images/${technology.logo})`,
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
      <h2 className="mt-6 ml-10 text-2xl">Description</h2>
      <p>{project.description}</p>
    </div>
  );
}
