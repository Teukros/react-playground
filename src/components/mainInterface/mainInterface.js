'use strict';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const React = require('react'),
  storage = require('../../helpers/storage'),
  MessageDisplayBox = require('../messageDisplay/messageDisplayBox/messageDisplayBox'),
  MessageEditor = require('../messageEditor/messageEditor');


const toolbarStyle = {
  backgroundColor: "#00BCBC",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
}
const toolbarTitleStyle = {
  color: "white",
  textAling: "center",
  fontSize: "1.5em"
}

const underToolbarDivStyle = {
  marginTop: "2.5em"
}

class MainInterface extends React.Component{
  render(){
    const posts = storage.getPosts();
    return (
      <div className="panel panel-default">
        <div>
          <Toolbar style= {toolbarStyle}>
            <ToolbarTitle text="Below you can find a components of Main Interface:" style = {toolbarTitleStyle} />
          </Toolbar>
          <MessageEditor/>
        </div>
        <div style = {underToolbarDivStyle}>Below you can find a list of messages.
          <MessageDisplayBox posts = {posts}/>
        </div>
      </div>)
  }
}

module.exports = MainInterface;
