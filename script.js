document.addEventListener("DOMContentLoaded", function() {

    animateCircle();  
    
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        let circle = document.getElementById("circle");
        let headerHeight = 50; 

        if (window.scrollY > 800) {
            circle.classList.add("hidden");
        } else {
            circle.classList.remove("hidden");
        }


        if (scrollPosition > headerHeight) {
            circle.style.position = "fixed";
            circle.style.top = "0";
        } else {
            circle.style.position = "relative";
            circle.style.top = headerHeight + "px";
        }
    });


  function animateCircle() {
    gsap.to("#circle", {
        scale: 2, 
        borderRadius: "45%",
        duration: 10,
        ease: "power3.inOut",
        yoyo: true,
        repeat: -1
    });
  }

});
