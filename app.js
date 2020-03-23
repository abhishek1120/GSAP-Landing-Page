const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');
const headline = document.querySelector('.hero');

const tl = new TimelineMax();

tl.fromTo(hero,1, {height:"0%"},{height:"80%", ease: Power2.easeInOut}
).fromTo(hero,1.2, {width:"100%"},{width:"70%", ease: Power2.easeInOut}
).fromTo(slider,1.2, {x: "-100%"},{x: "0%", ease: Power2.easeInOut},"-=1.2");
