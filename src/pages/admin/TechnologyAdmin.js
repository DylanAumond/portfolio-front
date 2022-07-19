import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTechnologies } from "../../api";
import FormCustomer from "../../components/admin/FormTechnology";

export default function TechnologyAdmin() {
  const location = useLocation();
  const dispatch = useDispatch();
  const Technologies = useSelector((state) => state.technologiesReducer);
  const technology = Technologies.find(
    (Technology) => Technology._id === location.state._id
  );
  useEffect(() => {
    dispatch(getTechnologies());
  }, [dispatch]);
  return (
    <div className="flex h-96">
      <FormCustomer editTechnology={technology} />
      {technology ? (
        <div className="mt-28">
          <h2>{technology.libelle}</h2>
          <div
            className="h-32 w-32 bg-cover bg-center"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technology.logo})`,
            }}
          ></div>
        </div>
      ) : (
        <p>la technologie n'existe pas</p>
      )}
    </div>
  );
}
