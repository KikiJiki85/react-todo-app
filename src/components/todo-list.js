import React from 'react';
import TodoListItem from './todo-list-item'

const TodoList = ({todoData}) => {

  const elements = todoData.map((item) => {
    return (
      <li>
        <TodoListItem {...item} />
      </li>
    );
  });

    return (
      <ul>
        {elements}
      </ul>
    );
  }

  export default TodoList;