import React from 'react';

const userInfo = {
  name: "Jordan Walke",
  imageLink: "./logo192.png",
  bio: "I am a software looking for work"
};

class Profile extends React.Component {
    constructor() {
        super();
    }
    render() {
  return (
    <div className='UserProfile-Div'>
      <img src={userInfo.imageLink} alt='post' width='200' height='200'></img>
      <p>{userInfo.name}</p>              
      <p>{userInfo.bio}</p>
    </div>
  )  
    }      
}

export default Profile;