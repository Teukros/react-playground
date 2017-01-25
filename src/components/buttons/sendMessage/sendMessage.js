'use strict';

const React = require('react');

class sendMessage extends React.Component{

  render(){
    return (<div> <form onSubmit={(e) => storage.addPost(e)}>
      <input type="submit" value="Send"/>
      </form>
    </div>)
    }
}
