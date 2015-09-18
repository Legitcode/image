import React from 'react'

export default class Image extends React.Component{

  constructor(){
    super()
    this.state = {
      opacity: 0
    }
  }

  fadeIn = () =>{
    this.setState({opacity: 1})
  }

  componentWillReceiveProps(props){
    if(props.src != this.props.src) this.setState({opacity: 0})
  }

  render(){
    //this vs including an Object.assign polyfill
    let style = this.props.style || {}
    style.transition = `opacity ${this.props.speed || 1}s`
    style.opacity = this.state.opacity

    return (
      <img
        {...this.props}
        style={style}
        src={this.props.src}
        onLoad={this.fadeIn}
      />
    )
  }
}
