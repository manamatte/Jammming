import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
  super(props);
//   this.state = {businesses:[] };
//   this.searchYelp =this.searchYelp.bind(this);
  this.search =   this.search.bind(this);
  this.handleTermChange =   this.handleTermChange.bind(this);
  }
  ////////
  handleTermChange (event){
   this.setState({ barState: event.target.value});
  }
  search(term){
    this.props.onSearch(term);
  }
  ////////
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
