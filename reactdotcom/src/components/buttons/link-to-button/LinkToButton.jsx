import React from 'react';

import { LinkToButtonWrapper } from './styled';

export const LinkToButton = ({children, ...props}) => {
  return(
    <LinkToButtonWrapper {...props}>
      { children }
    </LinkToButtonWrapper>
  )
};