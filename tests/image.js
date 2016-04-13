import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Image from '../src/image'

describe('Image', () => {
  it('renders with opacity: 0', () => {
    global.window = {}
    const wrapper = shallow(<Image src="http://google.com" />)
    expect(wrapper.props().style.opacity).to.equal(0)
  })

  it('renders with opacity: 1 on server', () => {
    global.window = undefined
    const wrapper = shallow(<Image src="http://google.com" />)
    expect(wrapper.props().style.opacity).to.equal(1)
  })

  it('changes opacity on state change', () => {
    const wrapper = shallow(<Image src="http://google.com" />)
    wrapper.setState({ opacity: 1 })
    expect(wrapper.props().style.opacity).to.equal(1)
  })

  it('opacity: 1 if base64', () => {
    const wrapper = shallow(<Image src="data:image/" />)
    expect(wrapper.props().style.opacity).to.equal(1)
  })
})