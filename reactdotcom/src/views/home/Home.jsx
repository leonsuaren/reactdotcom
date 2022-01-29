import React, { Fragment, useEffect, useRef } from 'react';
import anime from 'animejs';
import { HomeContainer, Menu, MenuOnThisPage, ContentContainer } from './styled';

import { LinkToButton } from '../../components/buttons/link-to-button';

export const Home = () => {

  const animationRef = useRef(null);

  useEffect(() => {
    var menuEl = document.getElementById('menuAnimation');
    var menuThisEl = document.getElementById('menuThisAnimetion')
    anime.remove(menuEl);
    anime.remove(menuThisEl);
    animationRef.current = anime({
      targets: '#menuAnimation',
      translateX: [-350, 0],
      delay: 1500,
      easing: 'easeOutExpo'
    });
    animationRef.current = anime({
      targets: '#menuThisAnimetion',
      translateX: [350, 0],
      delay: 2000,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <HomeContainer>
      <Menu id="menuAnimation">
        <h3>.components</h3>
        <h3>hola</h3>
        <h3>hola</h3>
      </Menu>
      <ContentContainer>
        <LinkToButton href='https://github.com/leonsuaren/reactdotcom' target="_blank">Github Repository</LinkToButton>
      </ContentContainer>
      <MenuOnThisPage id="menuThisAnimetion">
        <h3>On this page</h3>
      </MenuOnThisPage>
    </HomeContainer>
  )
}