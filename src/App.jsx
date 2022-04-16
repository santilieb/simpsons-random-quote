import DisplayQuote from './components/DisplayQuote';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const sampleQuote = [
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }
]

function App() {
  const [quote, setQuote] = useState(sampleQuote); 

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data)
        setQuote(data);
      });
  };

  return (
    <div className="App">
      <DisplayQuote quote={quote[0]} />
      {/* button that fetches new data from API on click */}
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
