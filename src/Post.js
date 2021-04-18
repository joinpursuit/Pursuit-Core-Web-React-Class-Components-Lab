import React, { Component } from 'react'
import "./Post.css";

class Post extends Component {
  constructor(){
    super()
  
    this.postInfo= {
      title: "Sample Post Title",
      imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
      description: "This is the description of the post",
    };
  }
  render() {
  const {postInfo} = this.postInfo
    return (
      <div className="Post" data-testid="post">
        <p>{this.postInfo.title}</p>
        <img src={this.postInfo.imageLink} alt="post" />
        <p>{this.postInfo.description}</p>
      </div>
    );
  }
}

export default Post
