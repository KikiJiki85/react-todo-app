import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  constructor() {
    super();

    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make awesome app'),
        this.createTodoItem('Have a lunch'),
      ],
    };
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
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

  addItem = (text) => {

    const newItem = this.createTodoItem(text);

    //add element in array ?
    this.setState((state) => {
      const { todoData } = this.state;
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray,
      };
    });

  };

  toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex((el) => el.id === id);
      
      // 1.update object
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      // 2. construct new array
      return  [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];

  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData,id,'important'),
      }
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };


  render() {

    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done === true).length;
    const todoCount = todoData.length - doneCount;


    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount}/>

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todoData={todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />

        <ItemAddForm 
          onItemAdded={this.addItem}/>
      </div>
    );
  }
}