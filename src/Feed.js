// import React from "react";
import Ad from "./Ad.js";
import Post from "./Post.js";
import "./Feed.css";

// const Feed = () => {
//   return (
//     <div className="Feed" data-testid="feed">
//       <h2>Feed</h2>
//       <Post />
//       <Post />
//       <Ad />
//       <Post />
//       <Ad />
//       <Post />
//     </div>
//   );
// };

// export default Feed;


import React, { Component } from 'react'

export default class Feed extends Component {
  render() {
    return (
      <div>
        <div className="Feed" data-testid="feed">
         <h2>Feed</h2>
           <Post />
           <Post />
           <Ad />
           <Post />
           <Ad />
           <Post />
         </div>
      </div>
    )
  }
}
