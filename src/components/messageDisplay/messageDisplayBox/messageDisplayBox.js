'use strict';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';


const React = require('react'),
  MessageDisplayText = require('../messageDisplayText/messageDisplayText');

class messageDisplayBox extends React.Component{

constructor(props){
  super()
}
  render(){

    return (
      <div>Here are messages from messageDisplayBox
      <MessageDisplayText posts = {this.props.posts}/>
    </div>);
  }
}

module.exports = muiThemeable()(messageDisplayBox);
