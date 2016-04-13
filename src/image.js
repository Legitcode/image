import React from 'react'

export default class Image extends React.Component {

  constructor({ src }){
    super()
    let opacity = 0
    if(!src.match(/http/) || typeof window === 'undefined') opacity = 1

    this.state = { opacity }
  }

  render(){
    let style = this.props.style || {}
    style.transition = `opacity ${this.props.speed || 1}s`
    style.opacity = this.state.opacity

    return (
      <img
        {...this.props}
        style={style}
        src={this.props.src}
        onLoad={() => this.setState({opacity: 1})}
      />
    )
  }
}


