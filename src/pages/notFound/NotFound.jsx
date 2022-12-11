import React from "react";
import "./NotFound.css";
import img from "../../assets/img/404img.jpg";
export default function NotFound() {
  return (
    <div>
      <div className="container">
        <div className="img-container">
        <h1>404 - Not Found</h1>
        <img className="img" src={img} alt="404 - Not Found"></img></div>
      </div>
    </div>
  );
}
