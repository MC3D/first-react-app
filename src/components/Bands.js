import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      band: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addBand = this._addBand.bind(this);
  }

  _handleInput(event) {
    if(event.target.name === 'band') {
      this.setState({band: event.target.value});
    }
  }

  _addBand(event) {
    event.preventDefault();
    this.props.addBand(this.state.band);
    this.setState({band: ''});
  }

  render() {
    let $bands = this.props.bands.map((band)=><Band key={band.id} band={band} addAlbum={this.props.addAlbum}/>);

    // let $bands = this.props.bands.map(function(band){
    //   return (
    //     <Band key={band.id} band={band} addAlbum={this.props.addAlbum}/>
    //   );
    // })
    return (
      <div>
        <form onSubmit={this._addBand}>
          <div className="form-group mb-2">
            <label for="newBandInput">Add a New Band</label>
            <input id="newBandInput" className="form-control" name="band" value={this.state.band} type="text" placeholder="band name" onChange={this._handleInput} required/>
          </div>
          <input className="btn btn-primary mb-2" type="submit" value="Add Band"/>
        </form>
        <ul className="list-group">{$bands}</ul>
      </div>
    );
  }
}

export default Bands;
