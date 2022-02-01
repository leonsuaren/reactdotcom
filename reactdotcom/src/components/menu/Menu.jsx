import React, { useRef, useEffect } from 'react';
import { MenuWrapper, MenuContent } from './styled';
import { Link } from 'react-router-dom';

import anime from 'animejs';
import { menuAnimation } from './anime';

export const Menu = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    var menuEl = document.getElementById('menuAnimation');
    anime.remove(menuEl);
    animationRef.current = anime(menuAnimation);

  }, []);

  return (
    <MenuWrapper id='menuAnimation'>
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