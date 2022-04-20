import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTechnology, getTechnologies } from "../../api";
import FormTechnology from "../../components/admin/FormTechnology";

export default function TechnologiesAdmin() {
  const technologies = useSelector((state) => state.technologiesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTechnologies());
  }, [dispatch]);
  return (
    <div>
      <FormTechnology />
      <div className=" grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {technologies.map((technology, i) => {
          return (
            <div key={i} className="flex items-center">
              <div
                className=" h-20 w-20 bg-center bg-cover"
                style={{
                  backgroundImage: `url(http://localhost:5000/public/images/${technology.logo})`,
                }}
              ></div>
              <div>
                <p>{technology.libelle}</p>
                <button
                  onClick={() => dispatch(deleteTechnology(technology._id))}
                  className="bg-red-600 p-1 text-white text-sm"
                >
                  Delete
                </button>
                <Link
                  className="bg-orange-600 p-1 text-white text-sm"
                  to={`/admin/technologies/${technology.libelle}`}
                  state={technology}
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
