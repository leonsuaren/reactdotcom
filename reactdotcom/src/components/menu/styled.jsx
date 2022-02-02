import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  box-sizing: border-box;
  padding: 5px;
  align-items: center;
  justify-items: start;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 10px 0px 10px 1px #aaaaaa;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 5px;
`;

export const DotBox = styled.div`
  width: 100%;
  height: 30px;
`;

export const Dot = styled.div`
  width: 15px;
  height: 15px;
  background-color: #dbef46;
  border-radius: 50%;
  display: inline-block;
  margin: 0px 5px;
  padding: 0px;
  /* position: relative;
  top: -80px; */
`;

export const Letter = styled.div`
  display: inline-block;
`;

export const BigDot = styled.div`
  width: 100px;
  height: 100px;
  background-color: #dbef46;
  border-radius: 50%;
  z-index: 3;
  position: absolute;
  left: -100px;
  top: 350px;
`;

export const LeftEye = styled.div`
  width: 15px;
  height: 15px;
  background-color: #435677;
  border-radius: 50%;
  position: relative;
  left: 23px;
  top: 32px;
`;

export const RigthEye = styled.div`
  width: 15px;
  height: 15px;
  background-color: #435677;
  border-radius: 50%;
  position: relative;
  left: 59px;
  top: 17px;
`;

export const Smile = styled.div`

`
