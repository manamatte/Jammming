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
        {name:"Limonare",artist:"Vasco", album: "piccolo",id:"16k34" }
      ],
      playlistName :"Gino",
      playlistTracks : [
        {name: "11erere",artist:"11sdfg",album:"11hsdh",id:"12033"},
        {name: "21erere",artist:"21sdfg",album:"21hsdh",id:"22033"},
        {name: "31erere",artist:"31sdfg",album:"31hsdh",id:"32033"}
      ]
    };
  }



  ///////////////////////////
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
