import React, { useEffect } from 'react';
import { HomeContainer, HeadContainer } from './styled';

import anime from 'animejs';
import { homeAnimation } from './anime';
import { BrandAnimation } from './../../components/menu';
import { ThisPageAnimation } from './../../components/on-this-page';

import { LinkToButton } from '../../components/buttons/link-to-button';
import { HeadTitle } from './../../global/globalStyled';
import { Dot } from '../../components/dot/simple-dot';

import { PageLayout } from '../../global/PageLayout';

export const Home = () => {

  useEffect(() => {
    anime(homeAnimation);
    BrandAnimation();
    ThisPageAnimation();
  }, []);

  return (
    <PageLayout>
      <HomeContainer id='homeContainerAnimation'>
        <hr />
        <br />
        <LinkToButton href='https://github.com/leonsuaren/reactdotcom' target="_blank">Github Repository</LinkToButton>
        <HeadContainer>
          <Dot />
          <HeadTitle>Overview</HeadTitle>
        </HeadContainer>
        <p>Let's say you want to create a nice looking modern Website, and you want to do it fast! Well <strong>React Dot Components</strong>  gives you the power of create something unique and flexible
            by adding to you projects all you need. From a button to a responsive layout...
        </p>
        <HeadContainer>
          <Dot />
          <HeadTitle>How it works !</HeadTitle>
        </HeadContainer>
      </HomeContainer>
    </PageLayout>
  )
}