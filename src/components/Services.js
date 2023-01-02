import React from "react";
import Lottie from "lottie-react";
import responsive from "../lottie/responsive.json";
import Animation from "../lottie/Animation.json";
import Motion from "../lottie/Motion.json";

export default function Services() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={responsive}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Développez <span className="text-red">votre audience</span> sur toutes
          les plateformes grâce à un{" "}
          <span className="text-red">design responsive .</span>
        </p>
      </div>
      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={responsive}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Augmenter <span className="text-red">votre visibilité</span> sur le
          web et gagner de nouveaux clients grâce au{" "}
          <span className="text-red">référencement .</span>
        </p>
      </div>
      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={Motion}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Vendez <span className="text-red">vos produits</span> en ligne dans le
          monde entier grâce à un <span className="text-red">site vitrine</span>
        </p>
      </div>
      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={Animation}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Développez votre audience sur toutes les plateformes grâce à un{" "}
          <span className="text-red">design responsive</span>
        </p>
      </div>
      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={responsive}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Développez votre audience sur toutes les plateformes grâce à un{" "}
          <span className="text-red">design responsive</span>
        </p>
      </div>
      <div className="bg-whiteCard  flex items-center rounded-full p-2">
        <Lottie
          className="w-32 h-32 rounded-full bg-whiteCard border-4 border-red"
          animationData={responsive}
          loop={true}
        />
        <p className="w-3/4 px-2">
          Développez votre audience sur toutes les plateformes grâce à un{" "}
          <span className="text-red">design responsive</span>
        </p>
      </div>
    </div>
  );
}
