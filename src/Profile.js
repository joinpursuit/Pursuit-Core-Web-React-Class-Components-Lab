import React from "react";
import "./Profile.css";

class Profile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="section">
        <div>
          <img
            src="https://acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png"
            alt="post"
            width="200"
            height="200"
          />
        </div>
        <div>
          <h3>Jordan Bobadilla</h3>
          <p>I am an engineer and musician.</p>
        </div>
      </section>
    );
  }
}

export default Profile;
