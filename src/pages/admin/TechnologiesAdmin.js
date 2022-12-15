import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTechnology, getTechnologies } from "../../api/technologies";
import NavBar from "../../components/admin/NavBar";

export default function TechnologiesAdmin() {
  // get the technologies' reducer
  const { technologies } = useSelector(state => state.technologiesReducer);
  const dispatch = useDispatch();

  // rehydrate the technologies reducer on dispatch action
  useEffect(() => {
    dispatch(getTechnologies());
  }, [dispatch]);

  return (
    <div className="flex">
      <NavBar />
      <div>
        <h1 className="text-center text-xl">Technologies</h1>
        <div className="flex flex-wrap gap-6 m-8">
          {technologies.map((technology, i) => {
            return (
              <div key={i} className="bg-gray-900">
                <div
                  className="h-20 w-20 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technology.logo})`,
                  }}
                ></div>

                <div>
                  <p className="text-white">{technology.libelle}</p>
                  
                  <button
                    onClick={() => dispatch(deleteTechnology(technology._id))}
                    className="bg-red p-1 text-white text-sm"
                  >
                    Delete
                  </button>

                  <Link
                    className="bg-orange-600 p-1 text-white text-sm"
                    to={`/admin/technologies/${technology._id}`}
                  >
                    Update
                  </Link>

                </div>
              </div>
            );
            })
          }
        </div>
      </div>
    </div>
  );
}
