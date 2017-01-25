'use strict';
import * as ReactBootstrap from 'react-bootstrap';


const React = require('react'),
  storage = require('../../helpers/storage'),
  Button = ReactBootstrap.Button,
  ButtonToolbar = ReactBootstrap.ButtonToolbar;

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {localCounter: storage.getVotesNumber(this.props.postId)};
    this.handleClick = this.handleClick.bind(this);
  };

//   getInitialState() {
//   // naming it initial clearly indicates that the only purpose
//   // of the passed down prop is to initialize something internally
//     return {localCounter: this.props.counter};
// };

  handleClick() {
  this.setState({localCounter: this.state.localCounter + 1});
  storage.upVote(this.props.postId);
};

  render(){
    return(
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>{this.state.localCounter}</Button>
        </ButtonToolbar>

    )
  }
}

module.exports = Counter;
