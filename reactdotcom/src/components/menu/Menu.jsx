import React, { useEffect, Fragment } from 'react';
import { MenuWrapper, MenuContent, DotBox, Letter, Dot, BigDot, LeftEye, RigthEye, MenuContainer } from './styled';
import { Link } from 'react-router-dom';

import { MenuButton } from '../../components/buttons/menu-button';

export const Menu = () => {

  useEffect(() => {
    // BrandAnimation();
  }, []);

  return (
    <Fragment>
      <BigDot id='bigDotAnimation'>
        <LeftEye className='eye' />
        <RigthEye className='eye' />
      </BigDot>
      <MenuContainer>
        <div />
        <MenuWrapper id='menuAnimation'>
          <DotBox>
            <Letter className='letter'>R</Letter>
            <Letter className='letter'>e</Letter>
            <Letter className='letter'>a</Letter>
            <Letter className='letter'>c</Letter>
            <Letter className='letter'>t</Letter>
            <Dot id='dotAnimation'></Dot>
            <Letter className='letter'>C</Letter>
            <Letter className='letter'>o</Letter>
            <Letter className='letter'>m</Letter>
            <Letter className='letter'>p</Letter>
            <Letter className='letter'>o</Letter>
            <Letter className='letter'>n</Letter>
            <Letter className='letter'>e</Letter>
            <Letter className='letter'>n</Letter>
            <Letter className='letter'>t</Letter>
            <Letter className='letter'>s</Letter>
          </DotBox>
          <div>
            <MenuContent>
              <Link to='/home'>
                <h4>Get Started</h4>
              </Link>
              <h4>Download</h4>
                <MenuButton textContent={'Components'} colorPicker={'rock'}/>
                <MenuButton textContent={'Button'}  position colorPicker={'lol'}/>
  
              <h4>Theme</h4>
              <h4>Tutorial</h4>
              <h4>About</h4>
            </MenuContent>
          </div>
          <h3>hola</h3>
        </MenuWrapper>
      </MenuContainer>
    </Fragment>
  )
};  