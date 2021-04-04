import React from "react";
import "./Post.css";

const postInfo = {
  title: "Sample Post Title",
  imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  description: "This is the description of the post",
};

class Post extends React.Component {
  constructor() {
    super();
    this.title = postInfo.title;
    this.imageLink = postInfo.imageLink;
    this.description = postInfo.description;
  }
  render() {
    return (
      <div className="Post" data-testid="post">
        <p>{this.title}</p>
        <img src={this.imageLink} alt="post" />
        <p>{this.description}</p>
      </div>
    );
  }
}

export default Post;

// const Post = () => {
//   return (
//     <div className="Post" data-testid="post">
//       <p>{postInfo.title}</p>
//       <img src={postInfo.imageLink} alt="post" />
//       <p>{postInfo.description}</p>
//     </div>
//   );
// };
