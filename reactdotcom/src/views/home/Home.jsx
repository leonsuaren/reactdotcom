import React, { Fragment, useEffect, useRef } from 'react';
import anime from 'animejs';
import { HomeContainer, Menu, MenuOnThisPage } from './styled';

export const Home = () => {

  const animationRef = useRef(null);

  useEffect(() => {
    var menuEl = document.getElementById('menuAnimation');
    var menuThisEl = document.getElementById('menuThisAnimetion')
    anime.remove(menuEl);
    anime.remove(menuThisEl);
    // animationRef.current = anime({
    //   targets: '#menuAnimation',
    //   translateX: [-350, 0],
    //   delay: 1500
    // });
    // animationRef.current = anime({
    //   targets: '#menuThisAnimetion',
    //   translateX: [350, 0],
    //   delay: 2000
    // });
  }, []);

  return (
    <HomeContainer>
      <Menu id="menuAnimation">
        <h1>.components</h1>
        <h1>hola</h1>
        <h1>hola</h1>
        </Menu>
        <h1>hola</h1>
        <MenuOnThisPage id="menuThisAnimetion">
        <h1>On this page</h1>
        </MenuOnThisPage>
    </HomeContainer>
  )
}