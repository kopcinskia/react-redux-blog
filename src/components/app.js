import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2 className="text-xs-center"><Link to="/">Blog</Link></h2>
        { this.props.children }
      </div>
    );
  }
}
