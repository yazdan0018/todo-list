import React from 'react';
import {StyledForm,StyledFormWrapper,StyledButton,StyledInput} from '../formStyles';

const Form = ({handleSubmit,onChangeInput,name})=>{
  return(
    <StyledFormWrapper>
      <StyledForm>
        <StyledButton onClick={handleSubmit}>Add Todo</StyledButton>
        <StyledInput type="text" value={name} onChange={onChangeInput}/>
      </StyledForm>
    </StyledFormWrapper>
  )
}
export default Form;