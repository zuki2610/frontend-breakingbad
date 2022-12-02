import React, { useEffect, useState } from "react";
import getEpisodes from "../../api/getEpisodes";

export default function Episodios() {
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
    <div className="layoutpage custom">
      <div className="episopdes">
        {data.map((episopde) => (
          <div key={episopde.episode_id}>
            <p>ID: {episopde.episode_id}</p>
            <p>Title: {episopde.title}</p>
            <p>Season: {episopde.season}</p>
            <p>Air date: {episopde.air_date}</p>
            <p>Characters; {episopde.characters.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
