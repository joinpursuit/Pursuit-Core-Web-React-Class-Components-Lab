import React, { Component } from "react";
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
    );
  }
}


