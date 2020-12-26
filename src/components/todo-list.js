import React from 'react';
import TodoListItem from './todo-list-item'

const TodoList = () => {
    return (
      <ul>
        <li><TodoListItem label='Drink Coffee' important /></li>
        <li><TodoListItem label='Make awesome app'/></li>
        <li><TodoListItem label='Smth to be done'/></li>
      </ul>
    );
  }

  export default TodoList;