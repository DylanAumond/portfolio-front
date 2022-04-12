import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTechnology } from "../../api";

export default function FormTechnology() {
  const dispatch = useDispatch();
  const initForm = {
    libelle: "",
    logo: "",
  };

  const formData = new FormData();

  const [technology, setTechnology] = useState(initForm);
  const handleChange = (e) => {
    setTechnology({ ...technology, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setTechnology({ ...technology, logo: e.target.files });
    console.log(technology);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(technology)) {
      if (key === "logo") {
        formData.append(key, value[0], value[0].name);
      } else {
        formData.append(key, value);
      }
    }
    dispatch(postTechnology(formData));
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
        />
        <input
          type={"file"}
          name="logo"
          onInput={(e) => handleFiles(e)}
          multiple
        />
        {technology.logo ? (
          <div
            className="w-16 h-16 bg-cover bg-center"
            style={{
              backgroundImage: `url(${URL.createObjectURL(
                technology.logo[0]
              )})`,
            }}
          ></div>
        ) : (
          ""
        )}
        <button type="submit">create</button>
      </form>
    </div>
  );
}
