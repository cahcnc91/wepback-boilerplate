import React from "react";
import image from "../images/test.jpg";
import MarkdownData from "../data/post.md";

export default class extends React.Component {
  render() {
    return (
      <div className="profile">
        <img src={image} />
        <h1>{MarkdownData.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        ></div>
      </div>
    );
  }
}
