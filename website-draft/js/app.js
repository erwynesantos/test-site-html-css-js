//gsap.from("div", {opacity: 0, duration: 1.5, y: -50})
gsap.registerPlugin(ScrollTrigger)

gsap.from("#nav-bar",{x:-1000, duration: 1, ease: Power2.easeInOut});
gsap.from("#banner",{x:-1000, duration: 1, ease: Power2.easeInOut});
//gsap.from(".navbar-brand", {y: -60, duration: 1}).delay(0.8)
gsap.from(".nav-link", {x: 800, duration: 1, ease: Power2.easeInOut}).delay(0.5)
gsap.from(".promo-title", {opacity:0, y: -800, duration: 1}).delay(0.5)
gsap.from(".promo-info", {opacity:0, y: 800, duration: 1.5, ease: Power2.easeInOut}).delay(0.3)
gsap.from("#skills h1", {opacity:0, y: 800, duration: 0.8, ease: Power2.easeInOut}).delay(1.5)
gsap.fromTo("#skills h2", {x: 300, opacity: 0, duration: 1.5}, {x: 0, opacity: 1, ease: Power2.easeInOut}).delay(2)
gsap.fromTo(".skills-img", {scrollTrigger:".skills-img",opacity: 0, rotation: 0,x: -900,  duration: 1}, {opacity: 1, rotation: 360, x: 0, ease: Power2.easeInOut}).delay(2.4)

gsap.from("#social-media p", {scrollTrigger:"#social-media p",x: -400, opacity: 0, duration: 0.5})
gsap.from(".social-icons img", {scrollTrigger:".social-icons img", opacity: 0, duration: 1})

gsap.from(".history", {scrollTrigger:".history", opacity:0, y: 800, duration: 1, ease: Power2.easeInOut})

gsap.from("#footer",{scrollTrigger:"#footer", x:-1000, duration: 1, ease: Power2.easeInOut});