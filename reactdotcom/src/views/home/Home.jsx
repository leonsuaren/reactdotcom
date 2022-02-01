import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { HomeContainer } from './styled';

import { LinkToButton } from '../../components/buttons/link-to-button';
import { HeadTitle } from './../../global/globalStyled';

export const Home = () => {
  
  const animationRef = useRef(null);
  
  useEffect(() => {
    var containerEl = document.getElementById('homeContainerAnimation');
    anime.remove(containerEl);

    animationRef.current = anime({
      targets: '#homeContainerAnimation',
      translateY: [900, 0],
      easing: 'easeInOutQuint'
    });

  }, []);

  return (
    <HomeContainer id='homeContainerAnimation'>
        <hr/>
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