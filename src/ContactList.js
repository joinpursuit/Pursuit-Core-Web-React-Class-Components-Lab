import React from "react";
import "./ContactList.css";

class ContactList extends React.Component {
  render() {
    return (
      <div className="ContactList" data-testid="contact-list">
        <p>Contacts</p>
        <ul>
          <li>Andrew Clark</li>
          <li>Brian Vaughn</li>
          <li>Dan Abramov</li>
          <li>Flarnie Marchan</li>
        </ul>
      </div>
    );
  }
}

export default ContactList;
