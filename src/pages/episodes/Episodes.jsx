import React, { useEffect, useState } from "react";
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
    <div className="layoutpage custom">
      <div className="episodes text-light">
        {data.map((episode) => (
          <div key={episode.episode_id}>
            <p>ID: {episode.episode_id}</p>
            <p>Title: {episode.title}</p>
            <p>Season: {episode.season}</p>
            <p>Air date: {episode.air_date}</p>
            <p>Characters; {episode.characters.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
