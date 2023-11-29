import React, { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../assets/twitterxx.png'
import reload from '../assets/reloadicon.png'

const RandomQuote = () => {

    //-This will be the default quote
    const [quote, setQuote] = useState({
        text: "Be yourself; everyone else is already taken",
        author: "― Oscar Wilde",
    });

  return (
    <div className='container'>
        <div className="quote">
            {quote.text}
        </div>
        <div>
            <div className="line">
                {}
            </div>
            <div className="bottom">
                <div className="author">
                    {quote.author}
                </div>
                <div className="icons">
                    <img src={reload} alt="reload icon" />
                    <img src={twitter_icon} alt="twiiter icon logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote