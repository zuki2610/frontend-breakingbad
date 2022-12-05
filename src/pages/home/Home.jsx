import React from "react";
import bbimg from "../../assets/img/bbimg.jpg";
export default function Home() {
  return (
    <div className="p-5" style={{height: '80vh'}}>
      <div className="pb-5">
        <h1 className="fs-1 text-light text-center">
          El mejor site para el fandom de Breaking Bad esta aquí...!!!
        </h1>
      </div>
      <div className="px-1">
        <p className="text-light text-center fs-3">
          Visitanos y conoce todo sobre la serie de televisión estadounidense de
          drama criminal creada y producida por Vince Gilligan, personajes,
          citas, y las mas dolorosas muertes podrás revivirlas aqui!
        </p>
        <div className="px-5">
          <div className="px-5">
            <img src={bbimg} alt="Breaking Bad" className="img-fluid" />
          </div>
        </div>
        <div className="px-5"></div>
        <div className="px-5"></div>
      </div>
    </div>
  );
}
