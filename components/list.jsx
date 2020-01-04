import React, { Component } from "react";

class List extends Component {
  state = {
    tags: ["Shibil", "is", "me"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>;
    else
      return (
        <div>
          {this.renderTags()}
          {this.state.tags.length === 0 && "Please create a new tag!"}
        </div>
      );
  }

  render() {
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default List;
