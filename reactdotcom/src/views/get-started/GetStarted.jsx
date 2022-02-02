import React, { useEffect } from 'react';

import anime from 'animejs';
import { startButtonAnimation } from './anime';

import { useNavigate } from 'react-router-dom';

import { GetContainer, Button, WelcomeText, Span, Background } from './styled';

export const GetStarted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    anime(startButtonAnimation);
  }, []);

  const hangleOnClick = () => {
    setTimeout(() => { navigate('/home') }, 3000);
  }

  return (
    <Background>
      <GetContainer>
        <Button id='startButton' onClick={hangleOnClick}><Span>GET STARTED</Span></Button>
        <WelcomeText id='welcomeText'><Span>React Dot Components Library...</Span></WelcomeText>
      </GetContainer>
    </Background>
  )
}