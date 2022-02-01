import React, { useRef, useEffect } from 'react';

import { LinkToButtonWrapper } from './styled';

import anime from 'animejs';
import { linkButtonAnimation } from './anime';

export const LinkToButton = ({children, ...props}) => {

  const animationRef = useRef(null);

  useEffect(() => {
    var buttonEl = document.getElementById('linkButtonAnimation');
    anime.remove(buttonEl);

    animationRef.current = anime(linkButtonAnimation);

  }, []);

  return(
    <LinkToButtonWrapper id='linkButtonAnimation' {...props}>
      { children }
    </LinkToButtonWrapper>
  )
};