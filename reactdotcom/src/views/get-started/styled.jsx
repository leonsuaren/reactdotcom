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
  color: #93f856;
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

export const DotAnimation = styled.div`
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(15, 1fr);
  position: absolute;
  left: 0px;
  top:0px;
  width: 100vh;
  height: 100vh;
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: linear-gradient(#FFFFFF, #53544d);
  margin: 10px;
  padding: 0px;
`;

export const OutsiteDot = styled.div`
 width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    opacity: .03;
`;

  // box-shadow: 0 5px 15px #FFFFFF;