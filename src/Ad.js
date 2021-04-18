import React, { Component } from 'react'
import "./Ad.css";
export default class Ad extends Component {
  constructor(){
    super()
    this.adInfo = [
      {
        src: "https://placeimg.com/200/200/arch",
        text: "Doctors hate THIS ONE WEIRD TRICK",
      },
      {
        src: "https://placeimg.com/200/200/nature",
        text: "You won't believe what happened next!",
      },
      {
        src: "http://placekitten.com/g/200/200",
        text: "Celebs: Where are they now??",
      },
    ];
  }
    
  render() {
      const index = Math.floor(Math.random() * this.adInfo.length);
      const ad = this.adInfo[index];
    return (
      <div className="Ad" data-testid="ad">
        <img src={ad.src} alt="cool ad" />
        <p data-testid="ad-text">{ad.text}</p>
      </div>
    );
  }
}
