import './App.scss';
import React, {useEffect, useState} from 'react';
import COLOURS_ARRAY from './colorsArr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
function App() {
  
  const [quote, setQuote] = useState("Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.");
  const [author, setAuthor] = useState("Robert Frost");
  const [quotesArr, setQuotesArr] = useState(null);
  const [accentColour, setAccentColour] = useState("#000000");

  const fetchQuotes = async(url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArr(parsedJSON.quotes)
  }
  
  useEffect( () => {
    fetchQuotes(quoteURL)
  }, [])       /* [quoteURL] =   removed from useEffect*/


  const GenerateRandom = () => {
    let randomInteger = Math.floor(Math.random() * quotesArr.length);

    setQuote(quotesArr[randomInteger].quote);
    setAuthor(quotesArr[randomInteger].author);
    setAccentColour(COLOURS_ARRAY[randomInteger])

    
  }
  return (
    <div className="App">
      <header className="App-header" style={{"background-color": accentColour, transition: "all 1.5s ease",
WebkitTransition: "all 1.5s ease",
MozTransition:"all 1.5s ease"}}>
        
        <div id="quote-box" style={{"color": accentColour, transition: "all 1.5s ease",
WebkitTransition: "all 1.5s ease",
MozTransition:"all 1.5s ease"}}>
       
          <h2 id="text"><span id="quote-icon"><FontAwesomeIcon icon={faQuoteLeft} size="2xl"/></span>{quote}</h2>
          <h4 id="author">-{author}</h4>

          <div class="buttons">
          <a id="tweet-quote" style={{"background-color": accentColour, transition: "all 1.5s ease",
WebkitTransition: "all 1.5s ease",
MozTransition:"all 1.5s ease"}} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}><FontAwesomeIcon icon={faTwitter} /></a>
          <button id="new-quote" style={{"background-color": accentColour ,transition: "all 1.5s ease",
WebkitTransition: "all 1.5s ease",
MozTransition:"all 1.5s ease"}} onClick = {()=>GenerateRandom()}>Next</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
