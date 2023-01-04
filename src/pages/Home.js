import React, { useEffect, Suspense } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"

import { CONTACT } from "../constant/Modal"

import { getCustomers } from "../api/customers"
import { getProjects } from "../api/projects"
import { getTechnologies } from "../api/technologies"

import Loader from "../components/Loader"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

const CustomerSlider = React.lazy(() => import("../components/CustomerSlider"))
const Services = React.lazy(() => import("../components/Services"))
const CardProject = React.lazy(() => import("../components/CardProject"))
const Technocard = React.lazy(() => import("../components/Technocard"))

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const dispatch = useDispatch()

  // get the translations from home
  const { t } = useTranslation("Home")

  // get the customers from the customers' reducer
  const { customers } = useSelector(state => state.customersReducer)

  // get the projects from the projects' reducer
  const { projects } = useSelector(state => state.projectsReducer)

  // get the technologies from the technologies' reducer
  const { technologies } = useSelector(state => state.technologiesReducer)

  // animation technologies
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    )
  }

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    )
  }

  // rehydrate the reducers on dispatch action
  useEffect(() => {
    dispatch(getCustomers())
    dispatch(getProjects())
    dispatch(getTechnologies())
    slideInTop("#customers", "1", "1")
    slideInLeft("#project")
    slideInLeft("#cardTechno", "1", "1")
  }, [dispatch])
  
  return (
    <div className="[&>*]:my-16">
      {/* Main banner */}
      <div className="w-full sm:h-480 sm:flex sm:justify-center sm:items-center">
        <div className="text-center">
          <img src={process.env.PUBLIC_URL + "/imgs/DADev.svg"} alt="img" />
        </div>
        <div className="text-center -mt-16 sm:mt-0">
          <h1>{t("TextHome")}</h1>
          <button
            className="bg-red text-white px-6 py-3 rounded-lg mt-6 text-sm"
            onClick={() => dispatch({ type: CONTACT })}
          >
            {t("GetInTouch")}
          </button>
        </div>
      </div>

      {/* cutomers' Section */}
      <div id="customers" className="text-center p-4">
        {/* customer's section title */}
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Customers")}</h2>
          <div className="h-1 bg-red w-8 mb-5"></div>
        </div>

        {/* customers' carrousel */}
        <Suspense fallback={<Loader />}>
          <CustomerSlider customers={customers} />
        </Suspense>
      </div>

      {/* Services' Section */}
      <div className="text-center p-4 sm:mt-0">
        {/* customer's section title */}
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Services")}</h2>
          <div className="h-1 bg-red w-8 mb-5"></div>
        </div>

        {/* Services */}
        <Suspense fallback={<Loader />}>
          <Services />
        </Suspense>
      </div>

      {/* Projects' Section */}
      <div id="project" className="text-black sm:mx-8">
        {/* Project's section tilte */}
        <div className="w-24 h-auto m-auto">
          <h2 className=" text-2xl">{t("Projects")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>
        {/* Projects' list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-x-10 p-4 justify-center sm:[&>*:nth-child(3n-2)]:mt-0 sm:[&>*:nth-child(3n-1)]:mt-16 sm:[&>*:nth-child(3n)]:mt-32 [&>*]:mt-8">
          {/* For each project */}
          {projects.map((project, index) => (
            <Suspense key={index} fallback={<Loader />}>
              <CardProject key={index} project={project} index={index} />
            </Suspense>
          ))}
        </div>
      </div>

      <div className="bg-white flex flex-col justify-center items-center">
        <div className="w-40">
          <h2 className=" text-2xl">{t("Technology")}</h2>
          <div className="h-1 bg-red w-8 mb-5 "></div>
        </div>

        {/* Technologies' list */}
        <div
          id="cardTechno"
          className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-4"
        >
          {technologies.map((technology, index) => (
            <Suspense key={index} fallback={<Loader />}>
              <Technocard key={index} technology={technology} />
            </Suspense>
          ))}
        </div>

      </div>
    </div>
  );
}
