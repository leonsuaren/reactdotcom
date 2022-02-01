import React from 'react';
import { MenuWrapper, MenuContent } from './styled';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <MenuWrapper>
      <h3>.components</h3>
      <div>
        <MenuContent>
          <Link to='/home'>
            <h4>Get Started</h4>
          </Link>
          <h4>Download</h4>
          <Link to='/components'>
            <h4>Components</h4>
          </Link>
          <h4>Theme</h4>
          <h4>Tutorial</h4>
          <h4>About</h4>
        </MenuContent>
      </div>
      <h3>hola</h3>
    </MenuWrapper>
  )
};  