import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTechnology, updateTechnology } from "../../api";

export default function FormTechnology({ editTechnology }) {
  const dispatch = useDispatch();
  const onEdit = () => {
    if (editTechnology != null) {
      return editTechnology;
    } else {
      return {
        libelle: "",
        logo: "",
      };
    }
  };
  const [initForm, setInitForm] = useState(onEdit);

  const formData = new FormData();

  const [technology, setTechnology] = useState(initForm);

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
    if (editTechnology != null) {
      dispatch(updateTechnology(formData, technology._id));
    } else {
      dispatch(postTechnology(formData));
    }
  };
  return (
    <div>
      <p>FormTechnology</p>
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
          required = {editTechnology !== null ? false : true}
        />
        {technology.logo ? (
          <div
            className="w-16 h-16 bg-cover bg-center"
            style={
              technology.logo[0] instanceof Blob
                ? {
                    backgroundImage: `url(${URL.createObjectURL(
                      technology.logo[0]
                    )})`,
                  }
                : {
                    backgroundImage: `url(http://localhost:5000/public/images/${technology.logo})`,
                  }
            }
          ></div>
        ) : (
          <p>No image upload yet</p>
        )}
        <button type="submit">
          {editTechnology ? "update technology" : "add technology"}
        </button>
      </form>
    </div>
  );
}
