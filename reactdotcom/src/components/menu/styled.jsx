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
  &:hover {
    box-shadow: 10px 0px 10px 1px #aaaaaa;
}
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 5px;
`;
