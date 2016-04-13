import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Image from '../src/image'

describe('Image', () => {
  it('renders with opacity: 0', () => {
    const wrapper = shallow(<Image src="blah" />)
    expect(wrapper.props().style.opacity).to.equal(0)
  })

  it('changes opacity on state change', () => {
    const wrapper = shallow(<Image src="blah" />)
    wrapper.setState({ opacity: 1 })
    expect(wrapper.props().style.opacity).to.equal(1)
  })
})