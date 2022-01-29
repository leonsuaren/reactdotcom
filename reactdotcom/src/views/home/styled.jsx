import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  width: 100%;
  height: 100%;
`;

export const Menu = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  align-items: center;
  justify-items: start;
  width: 80%;
  height: 100vh;
  padding: 20px;
  background-color: #2e343f;
  margin-right: 10px;
  &:hover {
    box-shadow: 10px 0px 10px 1px #aaaaaa;
  }
`;

export const MenuOnThisPage = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  align-items: center;
  justify-items: start;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #ffffff;
  margin-left: 10px;
  &:hover {
    box-shadow: -10px 0px 10px 1px #aaaaaa;
  }
`;

export const ContentContainer = styled.div`
  margin: 10px;
  padding: 5px;
  width: 100%;
`;

