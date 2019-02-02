
import React, { Component } from 'react';
//TrackList
import TrackList from '../TrackList/TrackList.js';
import './SearchResults.css';


class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults}/>
      </div>
    );
  }
}

export default SearchResults;