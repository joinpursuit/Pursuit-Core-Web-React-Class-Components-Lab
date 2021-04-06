// import React from "react";
// import "./App.css";
// import ContactList from "./ContactList";
// import Feed from "./Feed";

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

// export default App;




import React, { Component } from 'react';
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

export default class App extends Component {
  render() {
    return (
      <div className="App-Div">
      <Feed />
      <ContactList />
    </div>
    )
  }
}

