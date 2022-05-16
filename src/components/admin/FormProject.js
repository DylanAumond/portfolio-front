import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getTechnologies, postProject } from "../../api";

export default function FormProject() {
  const customers = useSelector((state) => state.customersReducer);
  const technologies = useSelector((state) => state.technologiesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
    dispatch(getTechnologies());
  }, [dispatch]);

  const initForm = {
    libelle: "",
    description: "",
    customer: "",
    state: "",
    technologies: [],
  };

  const [inputCustomerSearch, setInputCustomerSearch] = useState("");
  const [customerSuggetions, setCustomerSuggetions] = useState();
  const handleSearchCustomer = () => {
    let matches = [];
    if (inputCustomerSearch.length > 0) {
      matches = customers.filter((customer) => {
        const regex = new RegExp(`${inputCustomerSearch}`, "gi");
        return customer.libelle.match(regex);
      });
    }
    setCustomerSuggetions(matches);
  };

  const [inputTechnologySearch, setInputTechnologySearch] = useState("");
  const [technologySuggetions, setTechnologySuggetions] = useState();
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const handleSearchTechnology = () => {
    let matches = [];
    if (inputTechnologySearch.length > 0) {
      matches = technologies.filter((technology) => {
        const regex = new RegExp(`${inputTechnologySearch}`, "gi");
        return technology.libelle.match(regex);
      });
    }
    setTechnologySuggetions(matches);
  };

  const formData = new FormData();
  const [project, setProject] = useState(initForm);

  const handleChange = (e) => {
    if (e.target.name === "inputCustomerSearch") {
      return setInputCustomerSearch(e.target.value);
    }
    if (e.target.name === "inputTechnologySearch") {
      return setInputTechnologySearch(e.target.value);
    }
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
          formData.append(key, img, img.name);
        }
      }
      if (key === "technologies") {
        for (const technologie of value) {
          formData.append(key, technologie);
        }
      } else {
        formData.append(key, value);
      }
    }
    dispatch(postProject(formData));
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
        <p>Customer</p>
        {project.customer === "" ? (
          <>
            <input
              type={"text"}
              placeholder="search for a customer"
              name="inputCustomerSearch"
              autoComplete="off"
              value={inputCustomerSearch}
              onChange={(e) => {
                handleChange(e);
                handleSearchCustomer(inputCustomerSearch);
              }}
            />
            {customerSuggetions ? (
              <div>
                {customerSuggetions.map((suggetion, i) => (
                  <div
                    key={i}
                    className="hover:bg-blue-400 hover:text-white hover:cursor-pointer"
                    onClick={() => {
                      setProject({ ...project, customer: suggetion._id });
                      setInputCustomerSearch(suggetion.libelle);
                    }}
                  >
                    {suggetion.libelle}
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <div>
            <p>
              {inputCustomerSearch}{" "}
              <button
                className=" bg-orange-600 text-white p-1 rounded-lg"
                onClick={() => setProject({ ...project, customer: "" })}
              >
                update
              </button>
            </p>
          </div>
        )}

        <label htmlFor="description">description</label>
        <textarea
          placeholder="description"
          name="description"
          value={project.description}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <p>technologies</p>
        <input
          type={"text"}
          placeholder="search for a technology"
          name="inputTechnologySearch"
          value={inputTechnologySearch}
          autoComplete="off"
          onChange={(e) => {
            handleChange(e);
            handleSearchTechnology(inputTechnologySearch);
          }}
        />
        {technologySuggetions ? (
          <div>
            {technologySuggetions.map((suggetion, i) => (
              <div
                key={i}
                className="hover:bg-blue-400 hover:text-white hover:cursor-pointer"
                onClick={() => {
                  if (project.technologies.indexOf(suggetion._id) < 0) {
                    setProject({
                      ...project,
                      ...project.technologies.push(suggetion._id),
                    });
                    setSelectedTechnology([...selectedTechnology, suggetion]);
                  }
                  setInputTechnologySearch("");
                  setTechnologySuggetions([]);
                }}
              >
                {suggetion.libelle}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div>
          {selectedTechnology.map((technology, i) => {
            return (
              <div key={i} className="flex">
                <p>{technology.libelle}</p>
                <div
                  className=" bg-red-600 text-white p-1 rounded-lg"
                  onClick={() => {
                    setProject({
                      ...project,
                      technologies: project.technologies.filter(
                        (tech) => tech !== technology._id
                      ),
                    });
                    setSelectedTechnology(
                      selectedTechnology.filter((tech) => tech !== technology)
                    );
                  }}
                >
                  X
                </div>
              </div>
            );
          })}
        </div>

        <p>Images</p>
        <input
          type={"file"}
          name="imgs"
          onInput={(e) => handleFiles(e)}
          multiple
        />
        {project.imgs ? (
          <div className="flex">
            {Object.entries(project.imgs).map((img, i) => {
              return (
                <div
                  key={i}
                  className="w-32 h-32 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${URL.createObjectURL(
                      project.imgs[i]
                    )})`,
                  }}
                ></div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <label htmlFor="state">State</label>
        <select id="state" name="state" onChange={(e) => handleChange(e)}>
          <option value={true}>ended</option>
          <option value={false}>current</option>
        </select>
        <button type="submit">create</button>
      </form>
    </div>
  );
}
