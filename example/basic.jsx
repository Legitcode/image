import React from 'react';
import { render } from 'react-dom'
import Image from '../src/image';

export default class Basic extends React.Component {

  render() {
    return (
      <Image src="http://facebook.github.io/react/img/logo.svg" />
    );
  }
}

render(<Basic />, document.getElementById('react'));
