import React, { useEffect, useState } from "react";
import './Quotes.scss';
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
    <div className="container">
      <div className="quotes d-flex flex-wrap justify-content-around">
        {data.map((quote) => (
          <div key={quote.quote_id} className="card border border-success border-5 m-3 text-success">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <div className="blockquote-icon bg-success">
                  <i class="bi bi-quote text-white"></i>
                </div>
                <p>"{quote.quote}"</p>
                <footer className="blockquote-footer"><small>{quote.author} in <cite title="Source Title">{quote.series}</cite></small></footer>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
