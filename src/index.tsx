import React from 'react';
import ReactDOM from 'react-dom';
import './presentation/styles/index.scss';
import BlogContainer from './presentation/container/blogContainer';


ReactDOM.render(
  <React.StrictMode>
    <BlogContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

