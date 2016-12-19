import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Blog
        { this.props.children }
      </div>
    );
  }
}
