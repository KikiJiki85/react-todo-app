import React from 'react';
import ReactDOM from 'react-dom';

// const el = React.createElement('h1',null, 'Hello world');

const el = (
  //Element tree
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search"/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);



ReactDOM.render(el, document.getElementById('root'));