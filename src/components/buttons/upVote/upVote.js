'use strict';
const React = require('react');
const style = {
  margin: 12,
};
const storage = require('../../../helpers/storage');


import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import Add from 'material-ui/svg-icons/content/add';
import {fullWhite} from 'material-ui/styles/colors';

class UpVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {localCounter: storage.getVotesNumber(this.props.postId)};
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({localCounter: this.state.localCounter + 1});
    storage.upVote(this.props.postId);
  };

  render(){
    console.log(this.state.localCounter)
    return (
      <FlatButton
        backgroundColor="#a4c639"
        hoverColor="#8AA62F"
        icon={<Add color={fullWhite}/>}
        style={style}
        onTouchTap={this.handleClick}
        label={`votes: ${JSON.stringify(this.state.localCounter)}`}
        labelPosition="before"
        primary={true}
      />
    )
  }
}

module.exports = UpVote;
