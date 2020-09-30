import React, { Component } from 'react';
import './styles.scss';

export default class Container extends Component {
  render() {
    const { story } = this.props;
    return <div role="main">{story()}</div>;
  }
}
