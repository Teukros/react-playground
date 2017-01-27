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
<<<<<<< HEAD
      <div>
=======
      <div>Here are messages from messageDisplayBox
>>>>>>> 9656f90f669f54cc59b9623e1edbe291f47d8446
      <MessageDisplayText posts = {this.props.posts}/>
    </div>);
  }
}

module.exports = muiThemeable()(messageDisplayBox);
