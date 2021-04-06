import React, {Component} from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

export default class extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />
      </div>
    );
  }
  
}

