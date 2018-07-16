import React, { Component } from 'react';
import './../css/App.css';
import Bands from './Bands';

let bands = [
  {
    id: 1,
    name: 'Korn',
    albums: [
      {
        album: 'Issues',
        tracks: ['Dead', 'Falling Away from Me', 'Trash']
      }, {
        album: 'Life Is Peachy',
        tracks: ['Chi', 'Lost', 'Twist']
      }, {
        album: 'Follow the Leader',
        tracks: ['It\'s On!, Freak on a Leash, Got the Life']
      }
    ]
  }, {
    id: 2,
    name: 'Halestorm',
    albums: [
      {
        album: 'The Strange Case of',
        tracks: ['Love Bites (So Do i)', 'Mz. Hyde', 'I Miss the Misery']
      }, {
        album: 'Into the Wild Life',
        tracks: ['Scream', 'I Am the Fire', 'Amen']
      }
    ]
  }, {
    id: 3,
    name: 'Mumford and Sons',
    albums: [
      {
        album: 'Babel',
        tracks: ['Babel', 'Whispers in the Dark', 'I Will Wait']
      }, {
        album: 'Wilder Mind',
        tracks: ['Monster', 'Snake Eyes', 'Wilder Mind']
      }, {
        album: 'Sign No More',
        tracks: ['Little Lion Man', 'Awake My Soul', 'Roll Away Your Stone']
      }
    ]
  }
];

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      bands: []
    }

    this._addBand = this._addBand.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
    this._addTrack = this._addTrack.bind(this);

    return;
  }

  componentDidMount() {
    this.setState({bands});

    return;
  }

  _addBand(name) {
    let id = 1;
    // create shallow copy rather than pointing variable at state
    let bands = this.state.bands.slice();
    bands.forEach(function(band){
      if(id <= band.id){
        id = band.id + 1;
      }
    });

    let band = {id, name, albums: []}
    bands.push(band);
    // update state
    this.setState({bands});

    return;
  }

  _addAlbum(id, album) {
    // create shallow copy rather than pointing variable at state
    let bands = this.state.bands.slice();
    bands.forEach(function(band){
      if(band.id === id) {
        if(band.albums) {
          band.albums.push({album});
        } else {
          band.albums = [{album}];
        }
      }
    });
    // update state
    this.setState({bands});

    return;
  }

  _addTrack(id, album, track) {
    let self = this;
    // create shallow copy rather than pointing variable at state
    let bands = this.state.bands.slice();

    bands.forEach(function(band){
      if(band.id === id) {
        // do stuff ...
      }
    });
    return;
  }

  render() {
    return (
      <div className="container">
        <Bands bands={this.state.bands} addBand={this._addBand} addAlbum={this._addAlbum} addTrack={this._addTrack}/>
      </div>
    );
  }
}

export default App;
