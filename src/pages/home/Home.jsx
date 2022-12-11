import React from "react";
import home from "../../assets/img/home.jpg";
import footer from "../../assets/img/home2.jpg";
import "./Home.css";
export default function Home() {
  return (
    <div className="p-5">
      <div className="imghome">
            <img src={home} className="hometop" alt="home"/></div>
      <div className="pb-5">
        <h1 className="fs-1 text-light text-center">
          El mejor site para el fandom de Breaking Bad esta aquí...!!!
        </h1>
      </div>
      <div className="px-1">
        <p className="parrafo text-light text-center fs-3">
          Visitanos y conoce todo sobre la serie de televisión estadounidense de
          drama criminal creada y producida por Vince Gilligan, personajes,
          citas, y las mas dolorosas muertes podrás revivirlas aqui!
        </p>
        <div className="px-5">
        </div>
        <div className="px-5"></div>
        <div className="px-5"></div>
      </div>
    </div>
  );
}
