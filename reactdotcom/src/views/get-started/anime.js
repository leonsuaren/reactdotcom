import anime from 'animejs';

export const startButtonAnimation = {
  targets: '#startButton',
  loop: true,
  autoplay: true,
  easing: 'linear',
  duration: 900,
  direction: 'alternate',
  backgroundColor: ['#93f856', '#dbef46'], 
}

export const startDotAnimation = {
  targets: '.dotAnimation',
  loop: true,
  direction: 'reverse',
  scale: [
    { value: 0, easing: 'easeOutSine', duration: 300 },
    { value: 1, easing: 'easeInOutQuad', duration: 300 }
  ],
  delay: anime.stagger(200, { grid: [30, 15], from: 'center' }),
  autoplay: false
};

// export const dotAnimation = {
//   targets: '.dotAnime',
//   loop: true,
//   direction: 'alternate',
//   autoplay: true,
//   easing: 'linear',
//   backgroundColor: [ '#ffffff', '#dbef46' ],
//   delay: function() { return anime.random(0, 100); },
//   scale: [ 0, 3 ],
// }

// export const animeSigleSquare = () => {
//   anime({
//     targets: '#startButton',
//     easing: 'easeOutSine',
//     opacity: 0,
//     zIndex: 4,
//   });
//   anime({
//     targets: '#welcomeText',
//     easing: 'easeOutSine',
//     opacity: 0,
//     zIndex: 4,
//   });
//   anime({
//     targets: '.dotAnime',
//     easing: 'easeOutInCirc',
//     direction: 'alternate', 
//     loop: 2,
//     backgroundColor: [ '#ffffff', '#dbef46', '#ffffff' ],
//     delay: function() { return anime.random(0, 400); },
//     scale: 210
//   });
// }