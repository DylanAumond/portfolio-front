import React from 'react'
import Caroussel from './Caroussel';

export const Project = ({project}) => {
    console.log("modalShow", project)
  return (
    <div className="overflow-y-scroll overflow-x-hidden py-10 px-4">
      {/* Project caroussel */}
      {project.imgs ? (
        <Caroussel images={project.imgs} />
      ) : (
        <p>No images yet</p>
      )}

      {/* Project libelle */}
      <h1>{project.libelle}</h1>
        
      {/* Project information */}
      <div className="sm:flex">
        {/* Left content */}
        <div className="sm:flex-1">
          <h2>Description:</h2>
          <p className='my-2'>{project.description}</p>
        </div>

        {/* Right content */}
        <div className=" sm:w-1/2" style={{backgroundColor: 'red'}}>
          <h2>Informations:</h2>
          {/* Techno*/}
          <h2>Construit avec:</h2>
            <div className=" flex">
              {project.technologies ? (
                project.technologies.map((technology, i) => {
                  return (
                    <img
                      className="w-10 h-10"
                      src={`${process.env.REACT_APP_API_URL}/public/images/${technology.logo}`}
                      alt={technology.libelle}
                      key={i}
                    />
                  );
                })
              ) : (
                <p>Pas de technologies associées</p>
              )}
            </div>

          {/*Client */}
          <h2>Client :</h2>
          {project.customer !== undefined ? 
            (
              <div className="flex items-center">
                <img
                  className="w-10 h-10"
                  src={`${process.env.REACT_APP_API_URL}/public/images/${project.customer.logo}`}
                  alt={project.customer.libelle}
                />
                <p>{project.customer.libelle}</p>
              </div>
            ) 
            : ( <p>Pas de client associé</p> )
          }
        </div>
      </div>
    </div>
  )
}
