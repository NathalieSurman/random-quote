import React, { useEffect, useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../assets/twitterxx.png'
import reload from '../assets/reloadicon.png'

const RandomQuote = () => {

    let quotes = []; //This is where we will store all the quote data "using an API"
    //-This function will get the quotes from an API
    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    
    /*
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });

    }, [])
    */
 


    //-This will be the default quote
    const [quote, setQuote] = useState({
        text: "Be yourself; everyone else is already taken",
        author: "Oscar Wilde",
    });

    const random = () =>{
        //-We wamt tp get a random quote
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }


    const twitter = () =>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text}  - ${quote.author.split(',')[0]}`);//-you can open a url 

    }


    //-we want to call the method
    loadQuotes();

  return (
    <div className='container'>
        <div className="quote"> {quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">-  {quote.author.split(',')[0]}</div>
                <div className="icons">
                    <img src={reload} onClick={() => {random()}} alt="reload icon"  width="35px"/>
                    <img src={twitter_icon} onClick={() => {twitter()}} alt="twiiter icon logo"  width="40px" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote