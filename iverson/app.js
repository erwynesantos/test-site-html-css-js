const iversonImg = document.querySelector(".iverson img");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const reebok = document.querySelector("reebok");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(iversonImg,1, { height: "0%"}, { height: "80%", ease: Power2.easeInOut }) 

tl.fromTo(headline,1, { opacity: 0, x:30}, {opacity: 1, x: 0});