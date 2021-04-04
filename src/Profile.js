import React from "react";
import "./profile.css"

const userInfo ={
    name: "Peron's name",
    title: "Title",
    imgLink: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
}


class Profile extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="Profile" data-testid="profile">
        <img src={userInfo.imgLink}></img>
        <h3>{userInfo.name}</h3>
        <p>{userInfo.title}</p>
      </div>
    );
  }
}

export default Profile;
