import React from "react";

//test fonction pour faire un screen de l'écran canvas
//npm i html2canvas puis import
import html2canvas from "html2canvas";

export default function Button() {
  //je fais une fonction handleScreenShot qui va contenir ma fct° html2canvas
  const handleScreenShot = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas);
      console.log(typeof canvas);
      console.log(canvas);
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleScreenShot();
        }}
      >
        Make a screenshot
      </button>
    </div>
  );
}
