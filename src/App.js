import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";
import Post from "./Post";
import Ad from "./Ad";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
        <Ad />
        <Post />
      </div>
    );
  }
}

export default App;
