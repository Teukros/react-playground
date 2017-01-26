'use strict';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';


const React = require('react'),
  storage = require('../../helpers/storage'),
  MessageDisplayBox = require('../messageDisplay/messageDisplayBox/messageDisplayBox'),
  MessageEditor = require('../messageEditor/messageEditor');



class MainInterface extends React.Component{

  render(){

    const posts = storage.getPosts();

    return (
      <div className="panel panel-default">
        <div>
        <AppBar
  title=" Below you can find a components of Main Interface:"
/>
<Tabs>
<Tab label=" Below you can find a components of Main Interface:"  >

  </Tab>
  </Tabs>
  <MessageEditor/>
        </div>
        <div>Below you can find a list of messages.
          <MessageDisplayBox posts = {posts}/>
        </div>
      </div>)
  }
}

module.exports = MainInterface;
