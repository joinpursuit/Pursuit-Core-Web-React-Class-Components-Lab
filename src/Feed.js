import React from "react";
import Ad from "./Ad.js";
import Post from "./Post.js";
import "./Feed.css";

class Feed extends React.Component {
  render() {
    return (
      <div className="Feed" data-testid="feed">
        <h2>Feed</h2>
        <Post />
        <Post />
        <Ad />
        <Post />
        <Ad />
        <Post />
      </div>
    );
  }
}

export default Feed;
