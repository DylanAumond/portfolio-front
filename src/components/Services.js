import React from "react";
import Lottie from "lottie-react";

import Responsive from "../lottie/responsive.json";
import Seo from "../lottie/seo.json";
import Application from "../lottie/application.json";
import Shop from "../lottie/shop.json";
import Media from "../lottie/media.json";
import Online from "../lottie/online.json";
import { useTranslation } from "react-i18next";

const services = [
  {
    img: Responsive,
    textFr:
    <>
      Développez <span className="text-red">votre audience</span> sur toutes
      les plateformes grâce à un{" "}<span className="text-red">design responsive</span> .
    </>
    ,
    textEn:
    <>
      Develop <span className="text-red">your audience</span> on every devices
      thanks to a{" "}<span className="text-red">responsive design</span> .
    </>
    ,
  },
  {
    img : Seo,
    textFr:
      <>
      Augmentez <span className="text-red">votre visibilité</span> sur le
      web et gagner de nouveaux clients grâce au{" "}<span className="text-red">référencement</span> .
      </>
    ,
    textEn:
      <>
      Increase <span className="text-red">your visibility</span> on the web and gain new customers thanks to
      {" "}<span className="text-red">SEO</span> .
      </>
    ,
  },
  {
    img: Shop,
    textFr:
    <>
      Vendez <span className="text-red">vos produits</span> en ligne dans le
      monde entier grâce à un{" "}<span className="text-red">site marchand</span> .
    </>
    ,
    textEn:
    <>
      Sell <span className="text-red">your products</span> online in the whole world
      thanks to an{" "}<span className="text-red">e-commerce website</span> .
    </>
    ,
  },
  {
    img : Online,
    textFr:
    <>
      Représentez <span className="text-red">votre entreprise</span> en ligne à travers le monde grâce à un{" "}
      <span className="text-red">site vitrine</span> .
    </>
    ,
    textEn:
      <>
      Represent <span className="text-red">your company</span> online thanks to a beautiful {" "}
      <span className="text-red">showcase website</span> .
      </>
    ,
  },
  {
    img: Application,
    textFr:
    <>
      Automatisez <span className="text-red">vos tâches</span> pour gagner en éfficacité et gérer vos données grâce a une{" "}
      <span className="text-red">application</span> .
    </>
    ,
    textEn:
    <>
      Automate <span className="text-red">your tasks tâches</span> to gain efficient and manage your data thanks to an{" "}
      <span className="text-red">application</span> .
    </>
    ,
  },
  {
    img : Media,
    textFr:
    <>
      Gérez <span className="text-red">vos médias</span> pour maintenir l'intérêt créer pour vos idées/projets avec {" "}
      <span className="text-red">notre équipe</span> .
    </>
    ,
    textEn:
    <>
      Manage <span className="text-red">your medias</span> to keep people interest in your projects thanks to {" "}
      <span className="text-red">our team</span> .
    </>
    ,
  },
]

export default function Services() {

  const { i18n } = useTranslation()

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

      {services.map((service, index) =>(
        <div key={index} className="bg-whiteCard  flex items-center rounded-full p-2">
          <Lottie
            className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
            animationData={service.img}
            loop={true}
          />
          <p className="w-3/4 sm:px-2">{i18n.language === 'fr' ? service.textFr : service.textEn }</p>
      </div>
      ))}

    </div>
  );
}
