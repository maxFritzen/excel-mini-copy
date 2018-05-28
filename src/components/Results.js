import React from 'react';

const Results = () => (
  <div className="results">
    <h1 className="results__header">Great job!</h1>
    <div className="results__box">
      <div className="results__box-header"><h2>Did you know ...</h2></div>
      <ul className="results__box-list">
        <li className="results__box-list-item">Du kan använda snabbfyllning oavsett vilken rad i kolumnen du utgår ifrån!</li>
        <li className="results__box-list-item">Om en ruta från någon av andra raderna i kolumnen innehåller text som bryter mönstret, kommer det inte fungera. Detta stämmer dock inte nu i prototypen</li>
        <li className="results__box-list-item">Om du behöver, kan du markera de rader i kolumen du vill ska påverkas innan du trycker på snabbfyllningen. Återigen stämmer detta inte i prototypen</li>
      </ul>
    </div>
  </div>
);

export default Results;
