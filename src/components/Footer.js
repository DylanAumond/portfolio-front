import React from "react";

export default function Footer() {
  return (
    <div className="h-40 flex items-center justify-evenly">
      <div>
        <h3>Social Network:</h3>
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
  );
}
