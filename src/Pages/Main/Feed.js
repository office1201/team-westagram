import React, { Component } from "react";
import "./Feed.scss";

class Feed extends Component {
  render() {
    const { url, name } = this.props.data;
    return (
      <li className="Feed">
        <div className="FeedLine">
          <img src={url} alt={name} />
        </div>
        <span>{name}</span>
      </li>
    );
  }
}

export default Feed;
