'use strict';
import * as ReactBootstrap from 'react-bootstrap';

const React = require('react'),
  Counter = require('../../counter/counter'),
  ListGroup = ReactBootstrap.ListGroup,
  ListGroupItem = ReactBootstrap.ListGroupItem;


class messageDisplayText extends React.Component {
  render () {

    const pureMessage = {
      clear: "both",
      float: "left",
      border: "1px solid green"};

    const counterStyle = {
      float: "right",
      width:"auto",
      padding: "10px"};

    return (
      <div>
        LIST:
        <ListGroup>
          {this.props.posts.map(function(post){
            return <div key={ post.id }>
              <ListGroupItem style = {pureMessage} >{post.postText}
              <div style = {counterStyle}>
              <Counter  counter = {post.counter} postId = {post.id}/>
              </div>
              </ListGroupItem>
            </div>
          })}
        </ListGroup>
      </div>
    );
  }
}

module.exports = messageDisplayText;

