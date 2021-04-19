
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";



import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

  }
  render() {
    return (
    <div className="App-Div">
      <Feed />
      <ContactList />
    </div>
    )
  }
}
