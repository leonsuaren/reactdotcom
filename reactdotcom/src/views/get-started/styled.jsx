import styled from 'styled-components';

export const GetContainer = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  align-items: center;
  justify-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  `;

export const Button = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  font-size: 1.4rem;
  background-color: #93f856;
  position: relative;
  z-index: 3;
  border: none;
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
  box-shadow: 0 5px 15px #93f856;
`;

export const WelcomeText = styled.h1`
  color: #c6140d;
`; 

export const Span = styled.span`
  font-family: 'Architects Daughter', cursive;
  color: #a6c2ac;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2e343f;
`;