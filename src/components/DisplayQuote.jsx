import React from 'react';

function DisplayQuote({ quote }) {
  return (
    quote && (
      <div className='DisplayQuote'>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <h1>Character: {quote.character}</h1>
          <h1>Quote: {quote.quote}</h1>
        </ul>
      </div>
    )
  );
}

export default DisplayQuote;