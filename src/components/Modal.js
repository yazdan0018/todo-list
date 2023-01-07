import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  useImperativeHandle(ref, () => ({
    onClick: toggle,
  }));

  return (
    <>
      {
        show &&
        <>
          <StyledOverlay onClick={toggle}/>
          <StyledWrapper>
            {props.children}
          </StyledWrapper>
        </>
      }
    </>
  );
});

export default Modal;
