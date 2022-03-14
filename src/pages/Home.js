import React from "react";

export default function Home() {
  const Projects = [
    {
      id: 1,
      libelle: "LuckyByz",
      state: false,
      desciption: "C'est un site de vente de tombola en ligne",
    },
    {
      id: 2,
      libelle: "PortFolio",
      state: false,
      desciption: "C'st mon site",
    },
    {
      id: 3,
      libelle: "HorsePlateform",
      state: false,
      desciption: "Site de gestion de haras",
    },
    {
      id: 4,
      libelle: "MesJeux.fr",
      state: true,
      desciption: "Site de mini-jeux",
    },
  ];
  const Customers = [
    { id: 1, libelle: "forlindev", img: "fds" },
    { id: 2, libelle: "athenaRp", img: "zfds" },
    { id: 3, libelle: "VictorPetit", img: "dsfs" },
  ];
  const Technologies = [
    { id: 1, libelle: "reactJs" },
    { id: 2, libelle: "JavaScript" },
    { id: 4, libelle: "NodeJs" },
    { id: 5, libelle: "Symfony" },
    { id: 6, libelle: "Sql" },
    { id: 7, libelle: "Mongodb" },
    { id: 8, libelle: "Html" },
    { id: 9, libelle: "Css" },
  ];
  return (
    <div>
      <div className="w-full h-96 flex">
        <div className="h-full w-1/2 bg-red-800">
          <h1>Dylan Aumond</h1>
          <p>Developer FullStack Junior</p>
        </div>
        <div className="h-full w-1/2 bg-blue-800">
          <p>sqd</p>
        </div>
      </div>

      <div className="bg-black-light h-96 text-white">
        <h2>Projects</h2>
        {Projects.map((project) => {
          return (
            <div key={project.id}>
              <p>{project.libelle}</p>
            </div>
          );
        })}
        <button className="bg-white text-black-light">Show More</button>
      </div>

      <div className="h-40">
        <h2>Customers</h2>
        <div className="flex">
          {Customers.map((customer) => {
            return (
              <div key={customer.id}>
                <p>{customer.libelle}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-black-light text-white h-96">
        {Technologies.map((technologie) => {
          return (
            <div key={technologie.id}>
              <p>{technologie.libelle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
