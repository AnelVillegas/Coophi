import React, { Component } from 'react';

class Elements extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.name}</h2>
      <p>{this.props.post.description}</p>
    </div>
  );
 }
}
export default Elements;