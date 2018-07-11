import React, { Component } from 'react';

class Image extends Component{
  constructor(props){
    super(props);
  }

  render() {
    console.log('image', this.props);
    return (
        <div className="card col-3">
          <div className="card-img-top card-image"><img src={this.props.image.url} alt={this.props.image.actor}/></div>
          <div className="card-body">
            <h5 className="card-title">{this.props.image.actor}</h5>
            <p className="card-text">{this.props.image.description}</p>
            <input type="button" className="btn btn-danger" value="Remove Image" onClick={this.props.removeImage}/>
          </div>
        </div>
    );
  }
}

export default Image;
