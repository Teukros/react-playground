'use strict';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const React = require('react');
const ReactDOM = require('react-dom');
const AppComponent = require('components/app/app');
const storage = require('./helpers/storage');

// storage.addPost("This is some random post!")

const container = document.querySelector('.app');
const posts = storage.getPosts();

const App = () => (
  //<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <MuiThemeProvider>
    <AppComponent posts = {posts}/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  container
    );
