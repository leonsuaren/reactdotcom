import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import { MenuOnThisPage } from './styled';

export const OnThisPage = () => {

  const animationRef = useRef(null);

  useEffect(() => {
    var thisPageEl = document.getElementById('thisPageAnimation');
    anime.remove(thisPageEl);

    animationRef.current = anime({
      targets: '#thisPageAnimation',
      translateX: [350, 0],
      delay: 600,
      easing: 'easeOutExpo'
    });
  }, [])

  return (
    <MenuOnThisPage id='thisPageAnimation'>
      <h3>On this page</h3>
    </MenuOnThisPage>
  )
};
