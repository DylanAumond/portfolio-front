import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../api/customers";
import { postProject, updateProject } from "../../api/projects";
import { getTechnologies } from "../../api/technologies";
import FormProjectTasks from "../FormProjectTasks";
import SearchInput from "../SearchInput";

export default function FormProject({data}) {
  // get customers from api reducer
  const {customers} = useSelector((state) => state.customersReducer)
  // get technologies from api reducer
  const {technologies} = useSelector((state) => state.technologiesReducer)

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
    tasks: [],
    imgs: [],
  }

  // create formData object
  const formData = new FormData();

  // value of selected customer
  const [selectedCustomer, setSelectedCustomer] = useState(data !== undefined ? data.customer : {})

  // list of selected technologies
  const [selectedTechnology, setSelectedTechnology] = useState(data !== undefined ? data.technologies : []);

  const initUpdate = (data) => {
    return{
      _id: data._id,
      libelle: data.libelle,
      description: data.description,
      tasks: data.tasks,
      imgs: data.imgs,
      // convert customer's object into an id
      customer : data.customer._id,
      // convert technologies array of object into an array of id
      technologies: data.technologies.map(technology => {
        if(technology instanceof Object) return technology._id
        return technology
      }),
    }
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

  // set project task depending on FormTasks
  function setTasks(tasksList){
    setProject({ ...project, tasks:tasksList });
  }

  // handle project value change
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  // handle project image input
  const handleFiles = (e) => {
    let newImgs = [...project.imgs]
    for(const file of e.target.files) {
      newImgs = [ ...newImgs, file ];
    }
    return setProject({ ...project, imgs: newImgs});
  };

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault();
    // for each key bind the value to the formData
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
            }else{
              formData.append('imgs', img);
            }
          }
          break
        default:
          formData.append(key, value);
      }
    }
    // if project is not specified, create a new project else update project
    data !== undefined ? dispatch(updateProject(formData, project._id)) : dispatch(postProject(formData))
  };

  return (
    <div style={{maxWidth: '1000px', minWidth:'300px', margin: 'auto'}}>
      <p>FormProject</p>

      <form className="flex flex-col w-2/3 m-auto" onSubmit={(e) => handleSubmit(e)}>

        <div>
          <p>Libelle du projet</p>
          <input
            type={"text"}
            placeholder="libelle"
            name="libelle"
            value={project.libelle}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <p>client du projet</p>
        {project.customer === "" ? (
            <SearchInput 
              data={customers} 
              clickHandler={setCustomer}
            />
          ) : (
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
          )
        }


          <div className="flex-1">
            <p>description du projet fr</p>
            <textarea
              placeholder="description fr"
              name="fr"
              className="w-full"
              value={project.description.fr}
              onChange={(e) => setProject({ ...project, description: {...project.description, fr: e.target.value} })}
            ></textarea>
          </div>

          <div className="flex-1">
            <p>description du projet en</p>
            <textarea
              placeholder="description en"
              name="en"
              className="w-full"
              value={project.description.en}
              onChange={(e) => setProject({ ...project, description: {...project.description, en: e.target.value} })}
            ></textarea>
          </div>

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
                        // add a technology to the project
                        setProject({...project,technologies: project.technologies
                          // check if technology is already in the project
                          .filter((tech) => tech !== technology._id),
                        })
                        // add a technology to the selected technology list
                        setSelectedTechnology(
                          // check if technology is already selected
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
        {project.imgs !== [] ? (
          <div className="flex">
            {Object.entries(project.imgs).map((img, i) => {
              return (
                <div
                  key={i}
                  className="w-32 h-32 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img[1] instanceof Blob ? URL.createObjectURL(img[1]) :
                      process.env.REACT_APP_API_URL+'/public/images/'+img[1]
                    
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
