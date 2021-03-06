import React from 'react';
import { Menu } from './../components/menu';
import { OnThisPage } from './../components/on-this-page';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  margin: 0px 0px;
  z-index: 2;
`;

const MainContainer = styled.div`
  padding: 10px;
`;

export const PageLayout = ({ children }) => {
  return (
    <Container>
      <Menu />
      <MainContainer>
        {children}
      </MainContainer>
      <OnThisPage />
    </Container>
  )
};