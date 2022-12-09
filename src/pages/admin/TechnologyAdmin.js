import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTechnology } from "../../api/technologies";
import FormCustomer from "../../components/admin/FormTechnology";
import NavBar from "../../components/admin/NavBar";

export default function TechnologyAdmin() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { technology } = useSelector(state => state.technologiesReducer);

  useEffect(() => {
    dispatch(getTechnology(id));
  }, [dispatch, id]);

  if (technology === undefined) {
    return <p>loading ...</p>;
  }
  return (
    <div className="flex h-96">
      <NavBar />
      <div>
        <FormCustomer data={technology} />

        <div className="mt-28">
          <h2>{technology.libelle}</h2>
          <div
            className="h-32 w-32 bg-cover bg-center"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technology.logo})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
