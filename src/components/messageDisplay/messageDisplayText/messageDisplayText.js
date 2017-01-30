'use strict';

const React = require('react'),
  UpVote = require('../../buttons/upVote/upVote'),
  Counter = require('../../counter/counter');
import Divider from 'material-ui/Divider';

import {List, ListItem} from 'material-ui/List';

class messageDisplayText extends React.Component {
  render() {

    const pureMessage = {
      clear: "both",
      float: "left"
      //border: "1px solid green"
    };

    const counterStyle = {
      float: "right",
      width: "auto",
      padding: "10px"
    };

    if (localStorage.getItem('lastId') == null) {

      return (
        <div>
          LIST:
          <List>
            <div>
              <ListItem primaryText="Brak postów"></ListItem>
              <Divider/>
            </div>
          </List>
        </div>
      );

    }

    else {

        return (
          <div>
            LIST:
            <List>
              {this.props.posts.map(function(post) {
                return <div key={post.id}>
                  <ListItem primaryText={post.postText} leftIcon={< UpVote counter = {
                    post.counter
                  }
                  postId = {
                    post.id
                  } />}></ListItem>
                  <Divider/>
                </div>
              })}
            </List>
          </div>
        );
  }
}


  }


module.exports = messageDisplayText;
