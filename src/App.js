import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";
import Profile from "./Profile"

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
        <Profile />
      </div>
    );
  }
}


export default App;
