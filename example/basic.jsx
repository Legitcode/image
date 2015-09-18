import React from 'react';
import Image from '../src/image';

export default class Basic extends React.Component {

  constructor(){
    super()
    this.state = {
      image: 'http://cdn.meme.am/instances/500x/59395405.jpg'
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({image: 'http://img3.goodfon.su/original/8560x5608/a/fc/nature-spring-mountain-house-2549.jpg'})
    }, 2000)
  }
  render() {
    return (
      <Image src={this.state.image} />
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
