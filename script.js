function  pageTransition() {
  let tl = gsap.timeline();

  tl.to(".transition", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });

  tl.to(".transition", {
    duration: 0.8,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });
} 

function contenAnimation() {
    let tl = gsap.timeline();
    tl.to("h1", {
      top: 90,
      duration: 0.8,
      ease: "power3.inOut", 
      delay: 0.25,
    });
}

function delay(n) {
  n = n || 0;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(100);
        done();
      },
      
      async enter(data) {
        contenAnimation();
      },

      async once(data) {
        contenAnimation();
      },
    },
  ],
});
