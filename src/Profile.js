import React from "react";
import "./Profile.css";

const userInfo = {
  title: "Name Here",
  imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRih-FNWiHbIHG6jHWSZyCGTBqWN2chuunYfG6YVaY9SoKoUfQVK_87J7K9oHrMmrlpTVY&usqp=CAU",
  description: "This is the bio of the named person of above pic",
};

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile" data-testid="profile">
        <p>{userInfo.title}</p>
        <img src={userInfo.imageLink} alt="profile" />
        <p>{userInfo.description}</p>
      </div>
    );
  }
}

export default Profile;