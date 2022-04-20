import React from "react";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="h-40 static bottom-0 text-center">
      <div className="flex justify-around w-full mt-4">
        <div>
          <h3>Réseaux Sociaux:</h3>
          <div className="flex">
            <p>Linkedin</p>
            <p>GitHub</p>
          </div>
        </div>

        <div>
          <h3>Location</h3>
          <p>50480 Sainte Mere Eglise</p>
          <p>11 village de la coquerie</p>
          <p>France</p>
        </div>
      </div>
      <p>Copyright {year} - created by Dylan Aumond</p>
    </div>
  );
}
