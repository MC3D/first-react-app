import React, { Component } from 'react';
import Image from './Image.js';

class ImageBoard extends Component{
  constructor(props){
    super(props);
  }

  render() {

    let $images = this.props.images.map(function(image) {
      return (
        <Image image={image}/>
      )
    })
    return (
      <div>{$images}</div>
    );
  }
}

export default ImageBoard;
