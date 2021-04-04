import React from "react";
import "./Profile.css";

const profileInfo = {
  title: "Name Here",
  imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  description: "This is the bio of the named person of above pic",
};

class Profile extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="Profile" data-testid="profile">
        <p>{profileInfo.title}</p>
        <img src={profileInfo.imageLink} alt="profile" />
        <p>{profileInfo.description}</p>
      </div>
    );
  }
}

export default Profile;