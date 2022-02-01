import React, { useRef, useEffect, Fragment } from 'react';
import { MenuWrapper, MenuContent, DotBox, Letter, Dot, BigDot, LeftEye, RigthEye } from './styled';
import { Link } from 'react-router-dom';

import { BrandAnimation } from './anime';
import anime from 'animejs';

export const Menu = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    BrandAnimation();
  }, []);

  return (
    <Fragment>
    <BigDot id='bigDotAnimation'>
      <LeftEye className='eye' />
      <RigthEye className='eye' />
    </BigDot>
      <MenuWrapper id='menuAnimation'>
        <DotBox>
          <Letter className='letter' id='firstR'>R</Letter>
          <Letter className='letter' id='firstE'>e</Letter>
          <Letter className='letter' id='firstA'>a</Letter>
          <Letter className='letter' id='firstC'>c</Letter>
          <Letter className='letter' id='firstT'>t</Letter>
          <Dot id='dotAnimation'></Dot>
          <Letter className='letter' id='secondC'>C</Letter>
          <Letter className='letter' id='firstO'>o</Letter>
          <Letter className='letter' id='firstM'>m</Letter>
          <Letter className='letter' id='firstP'>p</Letter>
          <Letter className='letter' id='secondO'>o</Letter>
          <Letter className='letter' id='firstN'>n</Letter>
          <Letter className='letter' id='secondE'>e</Letter>
          <Letter className='letter' id='secondN'>n</Letter>
          <Letter className='letter' id='secondT'>t</Letter>
          <Letter className='letter' id='firstS'>s</Letter>
        </DotBox>
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
    </Fragment>
  )
};  