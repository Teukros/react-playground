'use strict';

const React = require('react');

const MainInterface = require('../mainInterface/mainInterface'),
  storage = require('../../helpers/storage');

class AppComponent extends React.Component {

  render () {
    return (
      <div>
        <MainInterface>
        </MainInterface>
      </div>
    );
  }
}

module.exports = AppComponent;

