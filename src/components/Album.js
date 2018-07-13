import React, { Component } from 'react';
import Track from './Tracks';

class Album extends Component {

  render() {
    return(
      <div>
        <p>
          <button className="btn btn-warning" type="button" data-toggle="collapse" data-target={`#${this.props.album.album.replace(/ /g,'')}`} aria-expanded="false" aria-controls="collapseExample">
            {this.props.album.album}
          </button>
        </p>
        <div className="collapse" id={this.props.album.album.replace(/ /g,'')}>
          <div className="card card-body">
            {this.props.album.tracks}
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
