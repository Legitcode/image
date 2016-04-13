[![Circle CI](https://circleci.com/gh/Legitcode/image.svg?style=svg)](https://circleci.com/gh/Legitcode/image)
##Install
`npm install legit-image`

##What is this?

This is a react component based off [this post](http://davidwalsh.name/lazyload-image-fade). It works just like a regular image tag, except it will only fade in once the image has loaded.

###Example
~~~js
import Image from 'legit-image'

render(){
  return (
    <Image src="http://facebook.github.io/react/img/logo.svg" />
  )
}

~~~

##Props

- `speed`: fade in speed in seconds, ex: `0.5`, `1`, defaults to `1`

##That's about it

You can pass any other props and they will be applied to the image tag. If you have any ideas on making this better, feel free to send a pull request.
