import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';

import './app.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todoData: [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make awesome app', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
      ],
    };
  }

  deleteItem = (id) => {
    this.setState((state) => {

      const {todoData} = this.state;

      const idx = todoData.findIndex((el) => el.id === id);

      // [a, b, c, d, e]
      // [a, b,  , d, e]

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx+1);

      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      };
    });
  };

  render() {

    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todoData={todoData}
          onDeleted={this.deleteItem} />
      </div>
    );
  }
}