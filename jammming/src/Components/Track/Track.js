import React, { Component } from 'react';

import './Track.css';


class Track extends Component {
  constructor(props){
  super(props);
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
}
  //renderAction(isRemoval){  //check
  renderAction(){
    if(this.props.isRemoval)
    {
      return '-'}
    else{ return '+'}

  }
  /// check
  //addTrack(event){
  addTrack(){
    this.props.onAdd(this.props.track);
    // event.preventDefault();
  }
  removeTrack(){
    this.props.onRemove(this.props.track);
    // event.preventDefault();
  }
//  addvsReem(){
//    if(typeof this.props.onAdd() === "function")
//    {
//     this.addTrack();
//   }else{
//      this.removeTrack();
//    }
//
//
//  }

  //////////////////////////
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.props.isRemoval?this.removeTrack:this.addTrack}>{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
