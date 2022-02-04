import React from 'react';

import { ButtonWrapper, ButtonStyled, Span } from './styled';

export const MenuButton = ({ textContent, position, colorPicker }) => {
  return (
    <ButtonWrapper position={position}>
      <ButtonStyled colorPicker={colorPicker}><Span>{textContent}</Span></ButtonStyled>
    </ButtonWrapper>
  )
};
