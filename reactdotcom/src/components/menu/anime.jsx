import anime from 'animejs';

export const BrandAnimation = () => {
  var timeLine = anime.timeline()

  timeLine.add({
    targets: '#menuAnimation',
    translateX: [-200, 0],
    easing: 'easeOutExpo'
  })
    .add({
      targets: '.letter',
      translateY: [-80, 0],
      duration: 300,
      delay: anime.stagger(100, {from: 'center'}, {easing: 'easeInOutBack'})
    })
    .add({
      targets: '#dotAnimation',
      endDelay: 1500,
      keyframes: [
        {translateY: -50, delay: 100},
        {translateY: 50, delay: 100},
        {translateY: 0, delay: 100, easing: 'easeOutBounce'}
      ],
      duration: 2500
    })
}
    // .add({
    //   targets: '#dotAnimation',
    //   keyframes: [
    //     { translateY: 100, delay: 800, easing: 'easeOutBounce' },
    //     { translateX: 10, delay: 500, easing: 'easeOutBounce' },
    //     { translateX: -10, delay: 500, easing: 'easeOutBounce' },
    //     { translateX: 0, delay: 500, easing: 'easeOutBounce' },
    //     { translateY: -50, delay: 500, easing: 'easeOutBounce' }
    //   ],
    //   duration: 500,
    //   loop: 2,
    //   // direction: 'reverse'
    // })
    // .add({
    //   targets: '#bigDotAnimation',
    //   keyframes: [
    //     { translateX: 110, delay: 500, easing: 'easeOutExpo' },
    //     { translateX: -110, delay: 1500, easing: 'easeOutExpo' }
    //   ]
    // })