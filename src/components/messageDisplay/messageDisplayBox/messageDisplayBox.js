'use strict';

const React = require('react'),
  MessageDisplayText = require('../messageDisplayText/messageDisplayText');

class messageDisplayBox extends React.Component{

  render(){

    return (
      <div>Here are messages from messageDisplayBox
      <MessageDisplayText posts = {this.props.posts}/>
    </div>);

  }
}

module.exports = messageDisplayBox;
