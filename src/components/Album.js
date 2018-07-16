import React, { Component } from 'react';
import Track from './Track';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.album.tracks || [],
      track: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addTrack = this._addTrack.bind(this);
  }

  _handleInput(event) {
    if(event.target.name === 'track') {
      this.setState({track: event.target.value});
    }
  }

  _addTrack(event) {
    event.preventDefault();

    let band = this.props.band;
    let album = this.props.album;
    let track = this.state.track.slice();

    this.props.addTrack(band, album, track);
    this.setState({track: ''});
  }

  render() {
    let $tracks = this.state.tracks.map(function(track, index) {
      return (
        <Track key={index} track={track}/>
      )
    })
    return(
      <div>
        <p>
          <button className="btn btn-warning" type="button" data-toggle="collapse" data-target={`#${this.props.album.album.replace(/ /g,'')}`} aria-expanded="false" aria-controls="collapseExample">
            {this.props.album.album}
          </button>
        </p>
        <div className="collapse" id={this.props.album.album.replace(/ /g,'')}>
          <div className="card card-body">
            <form onSubmit={this._addTrack}>
              <div className="form-group mb-2">
                <label htmlFor="newTrackInput">Add a New Track</label>
                <input id="newTrackInput" className="form-control" name="track" type="text" placeholder="track name" value={this.state.track} onChange={this._handleInput} required/>
              </div>
              <input className="btn btn-primary mb-2" type="submit" value="Add Track"/>
            </form>
            {$tracks}
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
