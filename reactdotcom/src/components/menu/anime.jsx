import anime from 'animejs';

export const BrandAnimation = () => {
  var timeLine = anime.timeline({
    duration: 500,
  })

  timeLine.add({
    targets: '#menuAnimation',
    translateX: [-400, 0],
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
      keyframes: [
        { translateY: 120, delay: 500 },
        { translateX: 10, delay: 500 },
        { translateX: -10, delay: 500 },
        { translateX: 0, delay: 500 },
        { translateY: -50, delay: 500 }
      ],
      easing: 'easeOutInBounce',
      duration: 500,
      loop: 2,
      direction: 'reverse'
    })
    .add({
      targets: '#bigDotAnimation',
      keyframes: [
        { translateX: 200, delay: 500, easing: 'easeOutExpo' },
        { translateX: -200, delay: 1500, easing: 'easeOutExpo' }
      ]
    })
    .add({
      targets: '#dotAnimation',
      endDelay: 1500,
      translateY: [100, 80],
      easing: 'easeInOutBack'
    })
}