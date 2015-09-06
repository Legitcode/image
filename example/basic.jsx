import React from 'react';
import Image from '../src/image';

export default class Basic extends React.Component {

  render() {
    return (
      <Image src="http://facebook.github.io/react/img/logo.svg" />
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
