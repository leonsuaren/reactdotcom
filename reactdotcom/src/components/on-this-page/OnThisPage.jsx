import React, { useRef, useEffect } from 'react';
import { MenuOnThisPage } from './styled';

import anime from 'animejs';
import { thisPageAnimation } from './anime';

export const OnThisPage = () => {

  const animationRef = useRef(null);

  useEffect(() => {
    var thisPageEl = document.getElementById('thisPageAnimation');
    anime.remove(thisPageEl);
    animationRef.current = anime(thisPageAnimation);
  }, [])

  return (
    <MenuOnThisPage id='thisPageAnimation'>
      <h3>On this page</h3>
    </MenuOnThisPage>
  )
};
