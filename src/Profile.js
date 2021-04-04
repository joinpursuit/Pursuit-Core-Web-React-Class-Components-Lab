import React from "react";

class Profile extends React.Component {
    constructor() {
      super()
    }
  
    render() {
      return (
      <div className="Profile">
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
      <h2>Name</h2>
      <p>Lorem Ipsem</p>
    </div>
    )
    }
  }
  
  export default Profile;