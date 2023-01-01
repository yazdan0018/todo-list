import './App.css';
import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE: 'toggle',
  DELETE: 'delete'
}

function reducer (todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO :
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE :
      return todos.map(todo => {
        if(todo.id === action.payload.id) return {...todo, completed: !todo.completed}
        return todo
      })
    case ACTIONS.DELETE :
      return todos.filter(todo => todo.id !== action.payload.id)
    default :
      return todos
  }
}

function newTodo (name) {
  return {
    name: name,
    id: Date.now(),
    completed: false
  }
}

function App () {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
    setName('');
  }

  console.log(name, ':name')
  console.log(todos, ':todos')
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
      })}
    </>
  );
}

export default App;
