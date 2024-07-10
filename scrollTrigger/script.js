var tl=gsap.timeline()

tl.from(".page1 .navbar",{
    y:-100,
    duration:1,
})
tl.from(".navbar-right",{
    y:-100,
    duration:1,
})
tl.from(".navbar-left ul li",{
    y:-100,
    duration:1,
  stagger:1
})

gsap.to(".page1 .hero",{
 
})

