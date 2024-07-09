// gsap.to(".container",{
//     x:1000,
//     y:500,
//     duration:3,
//     delay:2,
//     rotate:300,
//     opacity:0,backgroundColor:"blue",
//     stagger:-1
    
// })
var tl=gsap.timeline()

tl.to(".container1",{
    x:1500,
    rotate:300,
    duration:2,
    delay:1
})
tl.to(".container2",{
    x:1500,
    rotate:300,
    duration:2,
    delay:1
})
tl.to(".container3",{
    x:1500,
    rotate:300,
    duration:2,
    delay:1
})

