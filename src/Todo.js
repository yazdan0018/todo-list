import React from 'react';
import styled from "styled-components";
import { BsToggleOn, BsTrash } from "react-icons/bs";

const StyledTodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  box-sizing: border-box;
`;

const StyledTodo = styled.div`
  width: 80%;
  min-width: 400px;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b5d8dc;
  border: 1px solid #dac3c3;
  padding: 1.5rem;
  border-radius: 10px;
 word-break: break-word;
`;

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
    <StyledTodoWrapper>
      <StyledTodo>
        <div style={{color: todo.completed ? '#aaa' : '#000',width:'90%'}}>{todo.name}</div>
        <div>
          <button style={{margin:'10px'}} onClick={() => onClickTodo(ACTIONS.TOGGLE)}><BsToggleOn/></button>
          <button onClick={() => onClickTodo(ACTIONS.REMOVE)}><BsTrash size='1rem'/></button>
        </div>
      </StyledTodo>
    </StyledTodoWrapper>
  );
}

export default Todo;