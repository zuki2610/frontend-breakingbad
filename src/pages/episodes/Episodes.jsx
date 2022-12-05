import React, { useEffect, useState } from "react";
import './Episodes.scss';
import getEpisodes from "../../api/getEpisodes";

export default function Episodes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getEpisodes();
      setData(resp);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);
  return (
    <div className="container">
      <div className="episodes pt-2">
        {data.map((episode) => (
          <div key={episode.episode_id} className="row">
            <div className="card border border-success border-5 my-3 text-success">
              <div className="card-body">
                <div className="card-body-icon bg-success">
                  <strong className="text-white">#{episode.episode_id}</strong>
                </div>
                <h5 className="card-title"><span className="badge text-bg-dark">Temp. {episode.season}</span> {episode.title}</h5>
                <p className="card-text mb-1"><strong>Fecha al Aire:</strong> {episode.air_date}</p>
                <p className="card-text"><strong>Personajes:</strong> {episode.characters.toString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
