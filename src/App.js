// import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Feed />
        <ContactList />
      </div>
    )
  }
}



// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

// export default App;
