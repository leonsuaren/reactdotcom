import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  box-sizing: border-box;
  position: ${ p => p.position ? 'absolute' : '' };
  left: ${ p => p.position ? 370 : '' }px;
  top: ${ p => p.position ? 100 : '' }px;
  /* z-index: -5; */
`;

const color = ({colorPicker}) => {
  if (colorPicker === 'rock') {
    return (
      css`
      background-image: linear-gradient(#5a42f7, #69b8e0);
      `
    )
  }
  if (colorPicker === 'crazy') {
    return (
      css`
      background-image: linear-gradient(#6f07c4, #bed119);
      `
    )
  }
  if (colorPicker === 'insane') {
    return (
      css`
      background-image: linear-gradient(#cf6327, #fff3cd);
      `
    )
  }
  if (colorPicker === 'odd') {
    return (
      css`
      background-image: linear-gradient(#65d1fe, #fcfcfc);
      `
    )
  }
  if (colorPicker === 'metal') {
    return (
      css`
      background-image: linear-gradient(#f259a3, #f2a559);
      `
    )
  }
  if (colorPicker === 'lol') {
    return (
      css`
      background-image: linear-gradient(#cb9141, #02114e);
      `
    )
  }
  if (colorPicker === 'dynamic') {
    return (
      css`
      background-image: linear-gradient(#144035, #c7fb21);
      `
    )
  }
}

export const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: none;
  ${color}
  cursor: pointer;
  opacity: .9;
  box-shadow: 0px 10px 10px #CCCCCC;
  /* z-index: -5; */
`;

export const Span = styled.span`
  font-family: 'Architects Daughter', cursive;
  font-size: 1.3rem;
  color: #FFFFFF;
  font-style: italic;
`;