import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTechnology, updateTechnology } from "../../api/technologies";

export default function FormTechnology({ data }) {
  const dispatch = useDispatch();
  const initTechnology =
  {
    libelle: "",
    logo: "",
  };

  const formData = new FormData();

  const [technology, setTechnology] = useState(data !== undefined ? data : initTechnology);
  const handleChange = (e) => {
    setTechnology({ ...technology, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setTechnology({ ...technology, logo: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(technology)) {
      if (key === "logo") {
        if (value[0] instanceof Blob) {
          formData.append(key, value[0], value[0].name);
        }
      } else {
        formData.append(key, value);
      }
    }
    data !== undefined ? dispatch(updateTechnology(formData, technology._id)) : dispatch(postTechnology(formData))
  };
  return (
    <div>
      <h1>{data !== undefined ? 'Edit' : 'Add'} a technology</h1>

      <form className="flex flex-col w-96" onSubmit={(e) => handleSubmit(e)}>

        <label htmlFor="libelle">Libelle</label>
        <input
          type={"text"}
          placeholder="libelle"
          name="libelle"
          value={technology.libelle}
          onChange={(e) => handleChange(e)}
          required = {true}
        />

        <input
          type={"file"}
          name="logo"
          onInput={(e) => handleFiles(e)}
          required = {data !== undefined ? false : true}
        />

        {technology.logo !== '' ? 
        (
          <div
            className="w-16 h-16 bg-cover bg-center"
            style=
            {
              technology.logo[0] instanceof Blob ? 
                {
                  backgroundImage: `url(${URL.createObjectURL(technology.logo[0])})`,
                }
                : 
                {
                  backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technology.logo})`,
                }
            }
          ></div>
        ) : 
        (
          <p>No image upload yet</p>
        )}

        <button type="submit"  className=" bg-green-400  m-4 rounded-lg">
          {data !== undefined ? "update technology" : "add technology"}
        </button>

      </form>
    </div>
  );
}
