import React from 'react';

const ACTIONS = {
  REMOVE: 'remove',
  TOGGLE: 'toggle',
};

function Todo ({todo, onToggle, onRemove}) {

  const onClickTodo = (type) => {
    if(type === ACTIONS.TOGGLE) {
      onToggle(todo.id)
    } else {
      onRemove(todo.id);
    }
  };

  return (
    <div>
      <span style={{color: todo.completed ? '#aaa' : '#000'}}>{todo.name}</span>
      <button onClick={() => onClickTodo(ACTIONS.TOGGLE)}>Toggle</button>
      <button onClick={() => onClickTodo(ACTIONS.REMOVE)}>Delete</button>
    </div>
  );
}

export default Todo;