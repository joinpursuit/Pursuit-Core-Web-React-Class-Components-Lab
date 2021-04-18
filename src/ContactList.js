import React from "react";
import "./ContactList.css";
import Contact from "./Contact.js";

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

// edit with props test on contact.js
// class ContactList extends React.Component {
//   render () {
//     return (
//       <div className="ContactList" data-testid="contact-list">
//         <p>Contacts</p>
//         <ul>
//           <Contact name="Andrew Clarke"/>
//           <Contact name="Brian Vaughn"/>
//           <li>Dan Abramov</li>
//           <li>Flarnie Marchan</li>
//         </ul>
//       </div>
//     );
//   }
// }