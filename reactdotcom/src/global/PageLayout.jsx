import React, { Fragment } from 'react';
import { Menu } from './../components/menu';
import { OnThisPage } from './../components/on-this-page';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  margin: 0px 0px;
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