import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getTechnologies, postProject } from "../../api";
import FormProjectTasks from "../FormProjectTasks";
import SearchInput from "../SearchInput";

export default function FormProject() {
  // get customers from api reducer
  const customers = useSelector((state) => state.customersReducer)
  // get technologies from api reducer
  const technologies = useSelector((state) => state.technologiesReducer)

  const dispatch = useDispatch()

  // refresh reducer on dispatch
  useEffect(() => {
    dispatch(getCustomers()); // fill the reducer with all customers
    dispatch(getTechnologies()); // fill the reducer with all technologies
  }, [dispatch])

  // initial values of project form
  const initForm = {
    libelle: "",
    description: {
      fr:'',
      en:''
    },
    customer: "",
    technologies: [],
    tasks: []
  }

  // value of project form
  const [project, setProject] = useState(initForm);

  // value of selected customer
  const [selectedCustomer, setSelectedCustomer] = useState('')

  // set the project customer
  function setCustomer(customer){
    setProject({ ...project, customer:customer._id });
    setSelectedCustomer( customer );
  }

  // list of selected technologies
  const [selectedTechnology, setSelectedTechnology] = useState([]);

  // add technology to the project
  function addTechnology(technology){
    // check if technology is already selected
    if (project.technologies.indexOf(technology._id) < 0) {
      // add technology to the project
      setProject({...project,...project.technologies.push(technology._id)});
      // add technology to the selected technology list
      setSelectedTechnology([...selectedTechnology, technology]);
    }
  }

  function setTasks(tasksList){
    setProject({ ...project, tasks:tasksList });
  }

  //
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleFiles = (e) => {
    setProject({ ...project, imgs: e.target.files });
  };

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault();
    // create formData object
    var formData = new FormData();
    for (const [key, value] of Object.entries(project)) {
      switch(key){
        case"tasks":
          formData.append(key, JSON.stringify(value))
          break
        case 'technologies':
          formData.append(key, JSON.stringify(value))
          break
        case 'imgs':
          for (const img of value) {
            // add the image to the formData
            formData.append(key, img, img.name);
          }
          break
        case 'description':
          formData.append(key, JSON.stringify(value))
          break
        default:
          formData.append(key, value);
      }
    }
    dispatch(postProject(formData))
  };

  return (
    <div>
      <p>FormProject</p>

      <form className="flex flex-col w-96" onSubmit={(e) => handleSubmit(e)}>

        <p>Libelle du projet</p>
        <input
          type={"text"}
          placeholder="libelle"
          name="libelle"
          value={project.libelle}
          onChange={(e) => handleChange(e)}
        />

        <p>client du projet</p>
        {project.customer === "" ? (
            <SearchInput 
              data={customers} 
              clickHandler={setCustomer}
            />
          ) : (
            <div>
              <p>
                {selectedCustomer.libelle}{" "}
                <button className=" bg-orange-600 text-white p-1 rounded-lg"
                  onClick={() => {
                    setProject({ ...project, customer: "" })
                    setSelectedCustomer('')
                  }}
                >
                  update
                </button>
              </p>
            </div>
          )
        }

        <p>description du projet fr</p>
        <textarea
          placeholder="description fr"
          name="fr"
          value={project.description.fr}
          onChange={(e) => setProject({ ...project, description: {...project.description, fr: e.target.value} })}
        ></textarea>

        <p>description du projet en</p>
        <textarea
          placeholder="description en"
          name="en"
          value={project.description.en}
          onChange={(e) => setProject({ ...project, description: {...project.description, en: e.target.value} })}
        ></textarea>

        <FormProjectTasks projectTasks={project.tasks} save={setTasks}/>

        <p>Technologies du projets</p>
        <SearchInput
          data={technologies}
          clickHandler={addTechnology}
        />
        <div>
          {selectedTechnology
            .map((technology, i) => (
                <div key={i} className="flex">
                  <p>{technology.libelle}</p>
                  <div
                    className=" bg-red-600 text-white p-1 rounded-lg"
                    onClick={() => {
                        setProject({...project,technologies: project.technologies
                          .filter((tech) => tech !== technology._id),
                        })
                        setSelectedTechnology(
                          selectedTechnology.filter((tech) => tech !== technology)
                        )
                      }
                    }
                  >
                    X
                  </div>
                </div>
              )
            )
          }
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
        ) : ("")
        }
        <button type="submit">create</button>
      </form>
    </div>
  );
}
