// const gsap = window.gsap;
// const ScrollTrigger = window.ScrollTrigger;

// gsap.registerPlugin(ScrollTrigger);

// // Define animations
// gsap.from("#hero", {
//   opacity: 3,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#hero",
//     start: "top center",
//     end: "bottom center",
//     scrub: true, // Smoothing effect
//   },
// });

// gsap.from(".elem", {
//   opacity: 0,
//   y: 100,
//   duration: 2,
//   stagger: 0.2, // Staggered animation for each element
//   scrollTrigger: {
//     trigger: ".elem",
//     start: "top bottom-=200px", // Start animation when the top of the element is 200px above the bottom of the viewport
//     end: "bottom center",
//     scrub: true,
//   },
// });

// gsap.from("#about", {
//     opacity: 0,
//     y: 100,
//     duration: 3,
//     // stagger: 0.2,
//     scrollTrigger: {
//       trigger: "#about",
//       start: "top bottom-=300px",
//       end: "bottom center",
//       scrub: true,
//     },
//   });
  

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function circleMouseFollow(){
  window.addEventListener("mousemove",function(dets){
    document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  })
}


function animatp1(){
  var tl = gsap.timeline();

  tl.from("#nav",{
    y:'10',
    opacity: 0,
    duration:1.5,
    ease:Expo.easeInOut
  })
  
  .to(".boundingelem", {
    y:"0",
    duration:1,
    opacity:1

    // stagger: 0.2
    
  })
  
  
  tl.from("#herofooter", {
    y:0,
    duration:1,
    opacity:0
  })

}


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

circleMouseFollow();
animatp1();





