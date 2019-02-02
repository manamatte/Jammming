
import React, { Component } from 'react';
//TrackList
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

class Playlist extends Component {
  constructor(props){
  super(props);
//   this.state = {businesses:[] };
//   this.searchYelp =this.searchYelp.bind(this);

    this.handleChangeName = this.handleChangeName.bind(this);

  }
//////////////////////
 handleChangeName(event){
  this.props.onNameChange(event.target.value);
 }
///////////////////////
  render() {
    return (
      <div className="Playlist">
        <input defaultValue ={'New Playlist'} onChange={this.handleChangeName}/>
        <TrackList tracks = {this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
