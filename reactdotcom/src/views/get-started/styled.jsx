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
`;

export const WelcomeText = styled.h1`
  color: #c6140d;
`; 

export const SquareContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

export const FourSquare = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;
`;

export const SingleSquare = styled.div`
  width: 100px;
  height: 100px;
  background-color: #2e343f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  background: #ffffff;
  border-radius: 50%;
  z-index: 0;
`;

export const Span = styled.span`
  font-family: 'Architects Daughter', cursive;
  color: #a6c2ac;
`;