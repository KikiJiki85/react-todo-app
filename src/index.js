import React from 'react';
import ReactDOM from 'react-dom';

// const el = React.createElement('h1',null, 'Hello world');

const TodoList = () => {

  const items = ['Learn React', 'Build Awesome App', 'Drink cofee'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
      <li>{ items[2] }</li>
    </ul>
  );
}

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
}

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '25px'
  };
  return (
    <input placeholder={searchText} style={searchStyle}/>
  );
}

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));