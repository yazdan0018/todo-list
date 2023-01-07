import './App.css'
import { useRef, useState } from "react";
import Todo from "./Todo";
import useTodos from "./hooks/useTodos";
import Modal from "./components/Modal";
import Form from "./components/Form";
import styled from "styled-components";

// add validation for form ok
// add styled components
// add button for form
// show no todos found error
// add modal for form

function App () {
  const modalRef = useRef();

  const {addTodo, removeTodo, todos, toggleTodo} = useTodos();
  const [name, setName] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    if(name !== '' && name.length !== 0 ){
      addTodo(name);
      setName('');
    }else{
     alert('invalid input')
    }
  }

  const onChangeInput = ({target: {value}}) => setName(value);



  return (<>
    <Form handleSubmit={handleSubmit} name={name} onChangeInput={onChangeInput}/>

    <Modal ref={modalRef}>
      <div>
        <h1>Modal
        </h1>
      </div>
    </Modal>
    {/*<button onClick={() => {*/}
    {/*  modalRef.current.onClick();*/}
    {/*}}>toggle me*/}
    {/*</button>*/}
    {todos.map(todo => {
      return <Todo key={todo.id} onToggle={toggleTodo} onRemove={removeTodo} todo={todo}/>
    })}
  </>);
}

export default App;
