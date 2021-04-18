import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

class App extends React.Component {
  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
      </div>
    );
  }
}

export default App;
