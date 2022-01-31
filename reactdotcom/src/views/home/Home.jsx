import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { HomeContainer } from './styled';

import { LinkToButton } from '../../components/buttons/link-to-button';
import { HeadTitle } from './../../global/globalStyled';

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
        <LinkToButton href='https://github.com/leonsuaren/reactdotcom' target="_blank">Github Repository</LinkToButton>
        <HeadTitle>Overview</HeadTitle>
        <p>Let's say you want to create a nice looking modern Website, and you want to do it fast! Well <strong>React Dot Components</strong>  gives you the power of create something unique and flexible 
          by adding to you projects all you need. From a button to a responsive layout...
        </p>
        <HeadTitle>How it works !</HeadTitle>
    </HomeContainer>
  )
}