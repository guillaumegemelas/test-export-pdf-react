import React from "react";
import { useRef } from "react";

export default function Canvas() {
  const canvas = useRef(null);
  const isDrawing = useRef(false);
  const prevMouse = useRef(null);

  //ne pas oublier de déclarer la fonction getCoordinates sinon erreur console is not defined
  const getCoordinates = (event, canvas) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (event) => {
    isDrawing.current = true;
    prevMouse.current = getCoordinates(event, canvas.current);
  };

  const stopDrawing = (event) => {
    isDrawing.current = false;
    prevMouse.current = null;
  };

  const draw = (event) => {
    if (!isDrawing.current) return;
    const context = canvas.current?.getContext("2d");
    const mouse = getCoordinates(event, canvas.current);

    if (!context || !mouse) return;

    if (prevMouse.current) {
      context.lineWidth = 2;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = "#000";
      context.beginPath();
      context.moveTo(prevMouse.current.x, prevMouse.current.y);
      context.lineTo(mouse.x, mouse.y);
      context.stroke();
    }

    prevMouse.current = mouse;
  };

  return (
    <div className="App">
      <h1>Test code Canvas</h1>
      <canvas
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        onMouseUp={stopDrawing}
        width={600}
        height={600}
        ref={canvas}
        className="canvas"
      />
    </div>
  );
}
