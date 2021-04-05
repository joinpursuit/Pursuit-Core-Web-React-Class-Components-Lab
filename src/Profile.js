// Bonus 1
// Add an `Profile` section to the social media app.

// separate `<Profile />` React class component.
// include a person's photo, name, and short bio.
// render the `<Profile />` component from the `<App />` component.
// The `<Profile />` should appear to the right of the `<ContactList />`

import React from "react";
import "./Profile.css";

class Profile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="Profile">
        <img
          src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
          alt="post"
          width="200"
          height="200"
        />
        <h2>Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </section>
    );
  }
}

export default Profile;
