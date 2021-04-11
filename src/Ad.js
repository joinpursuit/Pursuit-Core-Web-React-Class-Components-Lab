import React from "react";
import "./Ad.css";

// export const adInfo = [
//   {
//     src: "https://placeimg.com/200/200/arch",
//     text: "Doctors hate THIS ONE WEIRD TRICK",
//   },
//   {
//     src: "https://placeimg.com/200/200/nature",
//     text: "You won't believe what happened next!",
//   },
//   {
//     src: "http://placekitten.com/g/200/200",
//     text: "Celebs: Where are they now??",
//   },
// ];

// const Ad = () => {
//   const index = Math.floor(Math.random() * adInfo.length);
//   const ad = adInfo[index];

//   return (
//     <div className="Ad" data-testid="ad">
//       <img src={ad.src} alt="cool ad" />
//       <p data-testid="ad-text">{ad.text}</p>
//     </div>
//   );
// };


// THIS IS WHAT I WAS TRYING, BUT COULDN'T FIGURE OUT HOW TO RETURN A RANDOM INDEX INSIDE OF THE RENDER FUNCTION
// WHEN I DEFINE EVERYTHING ELSE INSIDE THE CONSTRUCTOR. COULDN'T WRITE OUT VARIABLES FREELY FOR INDEX INSIDE OF THE 
// CLASS FOR THE RANDOM INDEX, TO BE ACCESSED LATER FOR THE RENDER() METHOD. ALSO, this.src AND this.text BELONG TO THE 
// CONSTRUCTOR.

// class Ad extends React.Component {
//   constructor() {
//     super()

//     adInfo: [
//       {src: "https://placeimg.com/200/200/arch", text: "Doctors hate THIS ONE WEIRD TRICK"},
//       {src: "https://placeimg.com/200/200/nature", text: "You won't believe what happened next!"},
//       {src: "http://placekitten.com/g/200/200", text: "Celebs: Where are they now??"}
//     ]
//   }
// }

export const adInfo = [
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

const index = Math.floor(Math.random() * adInfo.length);
const ad = adInfo[index];

class Ad extends React.Component {

  render() {
    return (
      <div className="Ad" data-testid="ad">
        <img src={ad.src} alt="cool ad" />
        <p data-testid="ad-text">{ad.text}</p>
      </div>
    );
  }

};

export default Ad;
