window.addEventListener("scroll", event=>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPugin(ScrollTrigger,ScrollSmoother);

ScrollSmoother.create({
    wrapper: ".wrapper",
    container: ".container"
})