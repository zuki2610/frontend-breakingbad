import React, { useEffect, useState } from "react";
import getQuotes from "../../api/getQuotes";

export default function Quotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showData() {
      const resp = await getQuotes();
      setData(resp);
      console.log(resp);
      return resp;
    }
    showData();
  }, []);
  return (
    <div className="layoutpage custom">
      <div className="quotes">
        {data.map((quote) => (
          <div key={quote.quote_id}>
            <p>ID: {quote.quote_id}</p>
            <p>Quote: {quote.quote}</p>
            <p>Author: {quote.author}</p>
            <p>Series: {quote.series}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
