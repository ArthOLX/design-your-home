var timeline = gsap.timeline()

timeline.to(".navbar",{
    y:0,
    opacity:1,
    duration:0.6,
    stagger:0.3
})

timeline.to(".content", {
    x: 0,
    opacity: 1,
    duration:1,
    delay:0.4,
    stagger:0.4
});

