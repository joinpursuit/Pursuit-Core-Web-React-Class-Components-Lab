import React from "react";

const userInfo = {
  name: "Jordan Walke",
  title: "React Creator",
  imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  description: "Lorem Ipsem",
};

class Profile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="UserProfile-Div">
        <img src={userInfo.imageLink} alt="post" width="200" height="200"></img>
        <p>{userInfo.name}</p>
        <p>{userInfo.title}</p>
        <p>{userInfo.description}</p>
      </div>
    );
  }
}

export default Profile;