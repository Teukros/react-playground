'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const AppComponent = require('components/app/app');
const storage = require('./helpers/storage');

const container = document.querySelector('.app');
const posts = storage.getPosts();

ReactDOM.render(
  <AppComponent posts = {posts}/>,
  container
);
