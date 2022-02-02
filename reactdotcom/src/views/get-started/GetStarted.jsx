import React, { useEffect } from 'react';

import anime from 'animejs';
import { startButtonAnimation } from './anime';

import { useNavigate } from 'react-router-dom';

import { GetContainer, Button, WelcomeText, Span, Background, DotAnimation, Dot } from './styled';

export const GetStarted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    anime(startButtonAnimation);
    anime({
      targets: '.dotAnimation',
      loop: true,
      // direction: 'alternate',
      scale: [
        { value: 0, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
      ],
      delay: anime.stagger(100, { grid: [45, 22], from: 'center' }),
    });
  }, []);

  const hangleOnClick = () => {
    setTimeout(() => { navigate('/home') }, 3000);
  }

  return (
    <Background>
      <DotAnimation>
        {
          // Array(990).fill(<Dot className='dotAnimation' />)
        }
      </DotAnimation>
      <GetContainer>
        <Button id='startButton' onClick={hangleOnClick}><Span>GET STARTED</Span></Button>
        <WelcomeText id='welcomeText'><Span>React Dot Components Library...</Span></WelcomeText>
      </GetContainer>
    </Background>
  )
}