import anime from 'animejs';

// export const thisPageAnimation = {
//   targets: '#thisPageAnimation',
//   translateX: [450, 0],
//   delay: 650,
//   easing: 'easeOutExpo'
// };

export const ThisPageAnimation = () => {
  anime({
    targets: '#thisPageAnimation',
    translateX: [150, 0],
    delay: 300,
    easing: 'easeOutExpo'
  });
};