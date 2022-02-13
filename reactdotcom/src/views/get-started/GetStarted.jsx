import React, { useEffect } from 'react';

import anime from 'animejs';
import { startButtonAnimation, startDotAnimation } from './anime';

import { useNavigate } from 'react-router-dom';

import { GetContainer, Button, WelcomeText, Span, Background, DotAnimation, Dot, OutsiteDot } from './styled';

export const GetStarted = () => {
  const navigate = useNavigate();
  var animation;
  useEffect(() => {
    anime(startButtonAnimation);
    var mainAnimation = anime(startDotAnimation);
    mainAnimation.play();
    
    var getContainerAnimation =  anime({
      targets: '#getContainerAnimation', 
      translateY: [0, -1000], 
      autoplay: false,
      duration: 5000
      });
    animation = getContainerAnimation;
  }, []);

  const hangleOnClick = () => {
    animation.play();
    setTimeout(() => { navigate('/home') }, 1000);
  }

  return (
    <Background data-test="background-component" id="getContainerAnimation">
      <DotAnimation>
        {
          Array(450).fill(<OutsiteDot className='dotAnimation' ><Dot/></OutsiteDot>)
        }
      </DotAnimation>
      <GetContainer>
        <Button id='startButton' onClick={hangleOnClick}><Span>GET STARTED</Span></Button>
        <WelcomeText id='welcomeText'><Span>React Dot Components Library...</Span></WelcomeText>
      </GetContainer>
    </Background>
  )
}