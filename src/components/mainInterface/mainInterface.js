'use strict';

const React = require('react'),
  storage = require('../../helpers/storage'),
  MessageDisplayBox = require('../messageDisplay/messageDisplayBox/messageDisplayBox'),
  MessageEditor = require('../messageEditor/messageEditor');


class MainInterface extends React.Component{

  render(){

    const posts = storage.getPosts();

    return (
      <div className="panel panel-default"> Below you can find a components of Main Interface:
        <div>
          <MessageEditor/>
        </div>
        <div>Below you can find a list of messages.
          <MessageDisplayBox posts = {posts}/>
        </div>
      </div>)
  }
}

module.exports = MainInterface;
