import { useEffect, useReducer } from "react";
import useLocalStorage from "./useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";

export const ACTIONS = {
  ADD_TODO: 'add-todo', TOGGLE: 'toggle', DELETE: 'delete'
};

const generateTodo = (todoName) => ({name: todoName, id: Date.now(), completed: false});

function reducer (todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO :
      return [...todos, generateTodo(action.payload.name)];
    case ACTIONS.TOGGLE :
      return todos.map(todo => {
        if(todo.id === action.payload.id) return {...todo, completed: !todo.completed}
        return todo;
      });
    case ACTIONS.DELETE :
      return todos.filter(todo => todo.id !== action.payload.id);
    default :
      return todos
  }
}

const useTodos = () => {
  const {value: TODOS, updateLocalStorage} = useLocalStorage(LOCAL_STORAGE_KEYS.TODOS, []);
  console.log(TODOS);
  const [todos, dispatch] = useReducer(reducer, TODOS, undefined);

  const addTodo = (name) => dispatch({type: ACTIONS.ADD_TODO, payload: {name}});
  const toggleTodo = (id) => dispatch({type: ACTIONS.TOGGLE, payload: {id}});
  const removeTodo = (id) => dispatch({type: ACTIONS.DELETE, payload: {id}});

  useEffect(() => {
    updateLocalStorage(LOCAL_STORAGE_KEYS.TODOS, todos);
  }, [todos]);

  return {addTodo, toggleTodo, removeTodo, todos};
};

export default useTodos;
