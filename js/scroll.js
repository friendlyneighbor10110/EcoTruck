gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.2,
    effects: true,
});


gsap.fromTo('.about__descr--left', {opacity: 0, x: -450}, {
    opacity: 1, x: 0,
    scrollTrigger: {
        start: '-450',
        end: '-150',
        trigger: '.about__descr--left',
        scrub: true,
    }
});
gsap.fromTo('.about__img--right', {opacity: 0, x: 450}, {
    opacity: 1, x: 0,
    scrollTrigger: {
        start: '-450',
        end: '-150',
        trigger: '.about__img--right',

        scrub: true,
    }
});
gsap.fromTo('.about__img--left', {opacity: 0, x: -450}, {
    opacity: 1, x: 0,
    scrollTrigger: {
        start: '-950',
        end: '-150',
        trigger: '.about__img--left',
        scrub: true,
    }
});
gsap.fromTo('.about__descr--right', {opacity: 0, x: 450}, {
    opacity: 1, x: 0,
    scrollTrigger: {
        start: '-450',
        end: '-150',
        trigger: '.about__descr--right',
        scrub: true,
    }
});

gsap.fromTo('.advantages__item--line', {x: -850}, {
    x: 0,
    scrollTrigger: {
        start: '-850',
        end: '-150',
        trigger: '.advantages__item--line',

        scrub: true,
    }
});
