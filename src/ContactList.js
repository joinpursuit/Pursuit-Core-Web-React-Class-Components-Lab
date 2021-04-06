import React from "react";
import "./ContactList.css";

class ContactList extends React.Component {
  constructor(){
    super()

    this.names = ["Andrew Clark", "Brian Vaughn", "Dan Abramov", "Flarnie Marchan"]
  }
  render(){
    return (
      <div className="ContactList" data-testid="contact-list">
        <p>Contacts</p>
        <ul>
          {this.names.map(names => <li>{names}</li>)}
        </ul>
      </div>
    );
  }
  
};


export default ContactList