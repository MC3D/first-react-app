import React, { Component } from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
      description: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addImage = this._addImage.bind(this);
  }

  _handleInput(event) {

    let content = event.target.value;

    if(event.target.name === 'url') {
      this.setState({url: content});
    } else if(event.target.name === 'description') {
      this.setState({description: content});
    }
  }

  _addImage(event) {
    event.preventDefault();

    let context = this.state;
    this.props.addImage(context);

    this.setState({url: '', description: ''});
  }

  render() {
    return(
      <form onSubmit={this._addImage}>
        <div className="form-group">
          <label htmlFor="urlInput">Image Url</label>
          <input name="url" type="text" className="form-control" id="urlInput" placeholder="Enter image url" value={this.state.url} onChange={this._handleInput}/>
        </div>
        <div className="form-group">
          <label htmlFor="descriptionInput">Decription</label>
          <input name="description" type="text" className="form-control" id="descrptionInput" placeholder="Enter description" value={this.state.description} onChange={this._handleInput}/>
        </div>
        <button type="submit" className="btn btn-primary">Add Image</button>
      </form>
    )
  }
}

export default ImageForm;
