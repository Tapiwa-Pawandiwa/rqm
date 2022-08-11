import './App.scss';
import React, {useState,useEffect} from 'react';
import COLORS_ARRAY from './colorsArray';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'




let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
const twitterElement = <FontAwesomeIcon icon={faTwitter}/>

function App() {
  const [quote,setQuote] = useState("Work is 10% what happens to me and 90% how I react to it.")
  const [author,setAuthor] = useState("Charles Swindoll")
  const[randomNumber,setRandomNumber] = useState(0)
  const[quotesArray,setquotesArray] = useState(null)
  const[accentColor,setAccentColor]=useState('#F44336')
  //we are going to useEffect, its similiar to componentDidMount, componentDidUpdate , componentWillUnmount
  
  const fetchQuotes = async(url) => {
    const response = await fetch(url)
    const parsedJSON  = await response.json()
    setquotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(()=> {
    fetchQuotes(quoteDBUrl);
  },[quoteDBUrl]) 
  //since we are fetching data we use async
  //our effect quoteDBURL - runs once at start, if our url ever changes then it re-renders 
  //we will create key value paris with quotes and authors via objects
  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInteger)
    setAccentColor(COLORS_ARRAY[randomInteger]);
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  return (
    <div className="App">
      <header className="App-header" style={
        {backgroundColor:accentColor,color:accentColor}}>
        <div id="quote-box">
        <p id="text" style={{color:accentColor}}>
          "{quote}"
        </p>
        <div className ="button">
           <a id ="tweet-quote" style={{
            backgroundColor: accentColor
           }}
           href={encodeURI(`https://www.twitter.com/intent/tweet?text=${quote} -${author}`)}>
            
            <FontAwesomeIcon icon={faTwitter} beat color="white" />
            </a>
        </div>
        <p id="author" style={{color:accentColor}}>-{author}</p>
       
        <button id="new-quote" style={{backgroundColor:accentColor}} onClick={()=>getRandomQuote()}>New Quote</button>
        </div>
        
      </header>
    </div>  
  );
}
//we use encodeURI to encode special characters safely. it will convert it to a safe url. 

export default App;
