import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';




class App extends Component {
  constructor(props){
  super(props);
//   this.state = {businesses:[] };
//   this.searchYelp =this.searchYelp.bind(this);
    this.state ={
      searchResults:[
        {name:"Limonare",artist:"Vasco", album: "piccolo",id:"16k34" },
        {name: "31erere",artist:"31sdfg",album:"31hsdh",id:"32033"}
      ],
      playlistName :"Gino",
      playlistTracks : [
        {name: "11erere",artist:"11sdfg",album:"11hsdh",id:"12033"},
        {name: "21erere",artist:"21sdfg",album:"21hsdh",id:"22033"},
        {name: "31erere",artist:"31sdfg",album:"31hsdh",id:"32033"}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack= this.removeTrack.bind(this);
    this.updatePlaylistname =   this.updatePlaylistname.bind(this);
    this.savePlaylist =   this.savePlaylist.bind(this);

  }
  //////////////////////////
  savePlaylist(){
   let  trackURIs=[];
// uri    spotify:track:6rqhFgbbKwnb9MLmUQDhG6
    trackURIs=this.state.playlistTracks.map(track =>{
      return "spotify:track:"+track.id;
    });
    return trackURIs;
  }

  updatePlaylistname(name){
    this.setState({playlistName : name});
     return;
  }

  addTrack(track){
    //if(track.id)
   if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
     //this.setState({playlistTracks : this.state.playlistTracks})
     return;
   }else {
  //   this.state.playlistTracks.push({
  //     name: "asda",
  //     artist:"afa",
  //     album: "track.album",
  //     id:"track.id"
  //   });
     this.state.playlistTracks.push(track);
     this.setState({playlistTracks : this.state.playlistTracks});
     return;
   }
  }

  removeTrack (track){
    //if(track.id)
   if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
     var pos = this.state.playlistTracks.indexOf(track);
     this.state.playlistTracks.splice(pos,1);
     this.setState({playlistTracks : this.state.playlistTracks});
     return;
   }
  }

  ///////////////////////////
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistname} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
