import React, { useState } from "react";
import { postProject } from "../../api";

export default function FormProject() {
  const initForm = {
    libelle: "",
    description: "",
    state: true,
  };

  const formData = new FormData();

  const [project, setProject] = useState(initForm);
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setProject({ ...project, imgs: e.target.files });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(project)) {
      if (key === "imgs") {
        for (const img of value) {
          console.log(img);
          formData.append(key, img, img.name);
        }
      } else {
        formData.append(key, value);
      }
    }
    postProject(formData);
  };
  return (
    <div>
      <p>FormProject</p>
      <form className="flex flex-col w-96" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="libelle">Libelle</label>
        <input
          type={"text"}
          placeholder="libelle"
          name="libelle"
          value={project.libelle}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="description">description</label>
        <textarea
          placeholder="description"
          name="description"
          value={project.description}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <input
          type={"file"}
          name="imgs"
          onInput={(e) => handleFiles(e)}
          multiple
        />
        <input type={"checkbox"} value={project.state} name="state" />
        <button type="submit">create</button>
      </form>
    </div>
  );
}
