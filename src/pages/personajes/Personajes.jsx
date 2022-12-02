import React, { useEffect, useState } from "react";
import getCharacters from "../../api/getCharacters";

export default function Personajes() {
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
    <div className="layoutpage custom">
      <div className="character">
        {data.map((character) => (
          <div key={character.char_id}>
            <img src={character.img} alt="" srcset="" />
            <p>Name: {character.name}</p>
            <p>Nickname: {character.nickname}</p>
            <p>Birthday {character.birthday}</p>
            <p>Portrayed {character.portrayed}</p>
            <p>Category {character.category}</p>
            <p>Status {character.status}</p>
            <p>Occupation; {character.occupation.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
