import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";
import Ad from "./Ad";
import Post from "./Post";

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
