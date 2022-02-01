import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { HomeContainer } from './styled';

import { LinkToButton } from '../../components/buttons/link-to-button';
import { HeadTitle } from './../../global/globalStyled';

export const Home = () => {

  const animationRef = useRef(null);

  useEffect(() => {
    var hrEl = document.getElementById('hrAnimation');
    anime.remove(hrEl);

    var timeLine = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });

    animationRef.current = anime({
      targets: '#hrAnimation',
      width: [500, 1000],
      loop: true,
      duration: 1000,
      direction: 'alternate',
      autoplay: true
    })
  }, []);

  return (
    <HomeContainer>
        <hr id='hrAnimation'/>
        <br />
        <LinkToButton href='https://github.com/leonsuaren/reactdotcom' target="_blank">Github Repository</LinkToButton>
        <HeadTitle>Overview</HeadTitle>
        <p>Let's say you want to create a nice looking modern Website, and you want to do it fast! Well <strong>React Dot Components</strong>  gives you the power of create something unique and flexible 
          by adding to you projects all you need. From a button to a responsive layout...
        </p>
        <HeadTitle>How it works !</HeadTitle>
    </HomeContainer>
  )
}