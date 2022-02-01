import React, { Fragment, useEffect, useRef } from 'react';

import anime from 'animejs';
import { animeTest } from './anime';
import { useNavigate } from 'react-router-dom';

import { GetContainer, Button, WelcomeText, FourSquare, SingleSquare, SquareContainer, Span, Dot } from './styled';

export const GetStarted = () => {
  const navigate = useNavigate();
  const animationRef = useRef(null);

  useEffect(() => {
    let buttonEl = document.getElementById('startButton');
    let dotEl = document.querySelector('.dotAnime');
  
    anime.remove(dotEl);
    anime.remove(buttonEl);
    animationRef.current = anime(animeTest);

    animationRef.current = anime({
      targets: '.dotAnime',
      loop: true,
      direction: 'alternate',
      autoplay: true,
      easing: 'linear',
      backgroundColor: [ '#ffffff', '#dbef46' ],
      delay: function() { return anime.random(0, 100); },
      scale: [ 0, 3 ],
    });


    let squareEl = document.querySelector('.singleSquare');
    let welcomeText = document.getElementById('welcomeText');

    function animeSigleSquare() {
      anime.remove(squareEl);
      anime.remove(welcomeText);
      anime.remove(buttonEl);

      animationRef.current = anime({
        targets: '#startButton',
        easing: 'easeOutSine',
        opacity: 0,
        zIndex: 4,
      });
      animationRef.current = anime({
        targets: '#welcomeText',
        easing: 'easeOutSine',
        opacity: 0,
        zIndex: 4,
      });
      animationRef.current = anime({
        targets: '.dotAnime',
        easing: 'easeOutInCirc',
        direction: 'alternate', 
        loop: 2,
        backgroundColor: [ '#ffffff', '#dbef46', '#ffffff' ],
        delay: function() { return anime.random(0, 400); },
        scale: 210
      });
    }
   
    buttonEl.addEventListener('click', animeSigleSquare, false);
  }, []);

  const hangleOnClick = () => {
    setTimeout(() => {navigate('/home')},3000); 
  }

  return (
    <Fragment>
      <GetContainer>
        <Button id='startButton' onClick={hangleOnClick}><Span>GET STARTED</Span></Button>
        <WelcomeText id='welcomeText'><Span>React Dot Components Library...</Span></WelcomeText>
      </GetContainer>
      <SquareContainer>
        <FourSquare className='el'>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>
          <SingleSquare className='singleSquare'><Dot className="dotAnime" /></SingleSquare>

 
        </FourSquare>
        
        </SquareContainer>
    </Fragment>
  )
}