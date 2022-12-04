import React, { useEffect, useState } from "react";
import getDeaths from "../../api/getDeaths";

export default function Deaths() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getDeaths();
      setData(resp);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);
  return (
    <div className="layoutpage custom text-light">
      <div className="deaths text-light">
        {data.map((death) => (
          <div key={death.death_id}>
            <p>Death id: {death.death_id}</p>
            <p>Death: {death.death}</p>
            <p>Cause: {death.cause}</p>
            <p>Responsible: {death.responsible}</p>
            <p>Last words: {death.last_words}</p>
            <p>Season: {death.season}</p>
            <p>Episode: {death.episode}</p>
            <p>Number of deaths: {death.number_of_deaths}</p>
          </div>
        ))}
      </div>
    </div>
  );
}