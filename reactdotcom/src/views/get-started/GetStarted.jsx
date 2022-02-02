import React, { useEffect } from 'react';

import anime from 'animejs';
import { startButtonAnimation } from './anime';

import { useNavigate } from 'react-router-dom';

import { GetContainer, Button, WelcomeText, Span, Background, DotAnimation, Dot, OutsiteDot } from './styled';

export const GetStarted = () => {
  const navigate = useNavigate();
  var animation;
  useEffect(() => {
    anime(startButtonAnimation);
    var mainAnimation = anime({
      targets: '.dotAnimation',
      loop: true,
      direction: 'reverse',
      scale: [
        { value: 0, easing: 'easeOutSine', duration: 300 },
        { value: 1, easing: 'easeInOutQuad', duration: 300 }
      ],
      delay: anime.stagger(200, { grid: [30, 15], from: 'center' }),
      autoplay: false
    });
    mainAnimation.play();
    animation = mainAnimation;
  }, []);

  const hangleOnClick = () => {
    // animation.pause()
    setTimeout(() => { navigate('/home') }, 3000);
  }

  return (
    <Background>
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