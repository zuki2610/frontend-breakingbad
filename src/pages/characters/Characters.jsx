import React, { useEffect, useState } from "react";
import getCharacters from "../../api/getCharacters";
import "./Characters.css";
export default function Characters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getCharacters();
      setData(resp);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);
  return (
    <div className="container">
      <div className="characters d-flex flex-wrap justify-content-around">
        {data.map((character) => (
          <div key={character.char_id} className="card border border-success border-5 m-3 text-success" style={{ maxWidth: "540px" }}>
            <div className="row">
              <div className="col-md-4 align-middle text-success">
                <img src={character.img} className="img-fluid" style={{height: '45vh', width: '35vw'}} alt={character.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{character.name} <span className="text-muted">({character.nickname})</span></h5>
                  <p className="card-text mb-1"><strong>Cumpleaños:</strong> {character.birthday === "Unknown"? "Desconocido" : character.birthday}</p>
                  <p className="card-text mb-1"><strong>Actor:</strong> {character.portrayed}</p>
                  <p className="card-text mb-1"><strong>Participación:</strong> {character.category}</p>
                  <p className="card-text mb-1"><strong>Salud:</strong> {
                  character.status === "Presumed dead" ? "Presuntamente muerto" :
                  character.status === "Alive" ? "Vivo" :
                  character.status === "Deceased" ? "Fallecido" :
                  character.status
                  }</p>
                  <p className="card-text"><strong>Ocupación:</strong> {character.occupation.toString()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
