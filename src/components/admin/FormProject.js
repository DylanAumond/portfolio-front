import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getTechnologies, postProject, updateProject } from "../../api";
import FormProjectTasks from "../FormProjectTasks";
import SearchInput from "../SearchInput";

export default function FormProject({data}) {
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

  const formData = new FormData();

  // value of selected customer
  const [selectedCustomer, setSelectedCustomer] = useState(data !== undefined ? data.customer :'')

  // list of selected technologies
  const [selectedTechnology, setSelectedTechnology] = useState(data !== undefined ? data.technologies : []);

  const initUpdate = (data) => {
    // convert customer's object into an id
    if (data.customer instanceof Object) {
      setSelectedCustomer(data.customer.libelle)
      data.customer = data.customer._id
    }
    // convert technologies array of object into an array of id
    data.technologies = data.technologies.map(technology => {
      if(technology instanceof Object) return technology._id
      return technology
    })
    return data
  }

   // value of project form
   const [project, setProject] = useState(data !== undefined ? initUpdate(data) : initForm);


  // set the project customer
  function setCustomer(customer){
    setProject({ ...project, customer:customer._id });
    setSelectedCustomer( customer );
  }

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
    for (const [key, value] of Object.entries(project)) {
      switch(key){
        case 'tasks':
        case 'technologies':
        case 'description':
        case 'customer':
          formData.append(key, JSON.stringify(value))
        break
        case 'imgs':
          for (const img of value) {
            if(img instanceof Blob){
              // add the image to the formData
              formData.append(key, img, img.name);
            }
          }
          break
        default:
          formData.append(key, value);
      }
    }
    data !== undefined ? dispatch(updateProject(formData, project._id)) : dispatch(postProject(formData))
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
                  <p>{technology}</p>
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
                    backgroundImage: `url(${data !== undefined ? process.env.REACT_APP_API_URL+'/public/images/'+img[1] 
                    : URL.createObjectURL(project.imgs[i])
                  })`,
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
