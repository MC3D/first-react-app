import React, { Component } from 'react';
import Album from './Album';

class Band extends Component {
  constructor(props){
    super(props);

    this.state = {
      band: this.props.band.id,
      albums: this.props.band.albums || [],
      album: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
  }

  _handleInput(event) {
    if(event.target.name === 'album') {
      this.setState({album: event.target.value});
    }
  }

  _addAlbum(event) {
    event.preventDefault();
    this.props.addAlbum(this.state.band, this.state.album);
    this.setState({album: ''});
  }

  render() {
    let $albums = this.state.albums.map((album, index)=><Album key={index} band={this.state.band} album={album} addTrack={this.props.addTrack}/>);
    return (
      <div>
        <p>
        <button className="btn btn-success" type="button" data-toggle="collapse" data-target={`#${this.props.band.name.replace(/ /g,'')}`} aria-expanded="false" aria-controls={`#${this.props.band.name.replace(/ /g,'')}`}>
          {this.props.band.name}
        </button>
        </p>
        <div className="collapse" id={this.props.band.name.replace(/ /g,'')}>
          <div className="card card-body">
            <form onSubmit={this._addAlbum}>
              <div className="form-group mb-2">
                <label htmlFor="newAlbumInput">Add a New Album</label>
                <input id="newAlbumInput" className="form-control" name="album" type="text" placeholder="album name" value={this.state.album} onChange={this._handleInput} required/>
              </div>
              <input className="btn btn-primary mb-2" type="submit" value="Add Album"/>
            </form>
            {$albums}
          </div>
        </div>
      </div>
    );
  }
}

export default Band;
