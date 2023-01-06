import { useState } from "react";
import Todo from "./Todo";
import useTodos from "./hooks/useTodos";

function App () {
  const {addTodo, removeTodo, todos, toggleTodo} = useTodos();
  const [name, setName] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    addTodo(name);
    setName('');
  }

  const onChangeInput = ({target: {value}}) => setName(value);

  return (<>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={onChangeInput}/>
    </form>
    {todos.map(todo => {
      return <Todo key={todo.id} onToggle={toggleTodo} onRemove={removeTodo} todo={todo}/>
    })}
  </>);
}

export default App;
