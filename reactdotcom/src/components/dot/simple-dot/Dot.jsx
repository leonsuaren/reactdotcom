import React, { useRef, useEffect } from 'react';
import { DotStyled } from './styled';

import anime from 'animejs';

export const Dot = ({ ...props }) => {
  var animationRef = useRef(null);

  useEffect(() => {
    var dotEl = document.getElementById('animationDot');
    anime.remove(dotEl);



  }, []);

  return (  
    <DotStyled {...props} id='animationDot' />
  )
};