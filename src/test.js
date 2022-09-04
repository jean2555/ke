let panels=document.querySelectorAll(".panel");
let fronts=document.querySelectorAll(".front");
let back=document.querySelectorAll(".back");

const mirrorTL= gsap.timeline();
const titleTL= gsap.timeline();

mirrorTL
 .to(fronts, 2.5, {backgroundPosition:"30px 0px", ease: "expo.inOut"});