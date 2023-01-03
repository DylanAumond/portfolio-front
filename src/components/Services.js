import React from "react";
import Lottie from "lottie-react";

import responsive from "../lottie/responsive.json";
import Seo from "../lottie/seo.json";
import Application from "../lottie/application.json";
import Shop from "../lottie/shop.json";
import Media from "../lottie/media.json";
import Online from "../lottie/online.json";

export default function Services() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">

      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={responsive}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Développez <span className="text-red">votre audience</span> sur toutes
          les plateformes grâce à un{" "}
          <span className="text-red">design responsive</span> .
        </p>
      </div>

      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={Seo}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Augmentez <span className="text-red">votre visibilité</span> sur le
          web et gagner de nouveaux clients grâce au{" "}
          <span className="text-red">référencement</span> .
        </p>
      </div>

      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={Shop}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Vendez <span className="text-red">vos produits</span> en ligne dans le
          monde entier grâce à un{" "}
          <span className="text-red">site marchand</span> .
        </p>
      </div>

      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={Online}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Représentez <span className="text-red">votre entreprise</span> en ligne à travers le monde grâce à un{" "}
          <span className="text-red">site vitrine</span> .
        </p>
      </div>

      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={Application}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Automatisez <span className="text-red">vos tâches</span> pour gagner en éfficacité et gérer vos données grâce a une{" "}
          <span className="text-red">application</span> .
        </p>
      </div>

      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={Media}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Gérez <span className="text-red">vos médias</span> pour maintenir l'intérêt créer pour vos idées/projets avec {" "}
          <span className="text-red">notre équipe</span>
        </p>
      </div>

    </div>
  );
}
