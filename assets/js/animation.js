const heroHeading = document.querySelector("#hero h1");

const splitText = new SplitType(heroHeading, {
    types: "words, chars",
    tagName: "span"
});

gsap.set(splitText.chars, { opacity: 0.2 });
gsap.set(".heroImageSlide1", { y: "0%" });
gsap.set(".heroImageSlide2", { y: "-59%" });

const totalTextDuration = splitText.chars.length * 0.5;

gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        markers: false,
    }
})
    .to(splitText.chars, {
        opacity: 1,
        stagger: 0.5,
        ease: "none",
    }, 0)
    .to(".heroImageSlide1", {
        y: "-59%",
        ease: "none",
        duration: totalTextDuration,
    }, 0)
    .to(".heroImageSlide2", {
        y: "0%",
        ease: "none",
        duration: totalTextDuration,
    }, 0);


gsap.set(".introInfo1", { x: "-100%", opacity: 0 });
gsap.set(".introInfo2", { x: "100%", opacity: 0 });
gsap.set(".checkWorkBtn", { y: "50px", opacity: 0 });

gsap.timeline({
    scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: false,
    }
})
    .to(".introInfo1", {
        x: "0%",
        opacity: 1,
        ease: "power2.out",
    }, 0)
    .to(".introInfo2", {
        x: "0%",
        opacity: 1,
        ease: "power2.out",
    }, 0)
    .to(".checkWorkBtn", {
        y: "0px",
        opacity: 1,
        ease: "power2.out",
    }, 0.3);



const portfolioContainer = document.querySelector("#portfolio .container .portfolioContent");
const portfolioHeading = document.querySelector("#portfolio .portfolioHeading");

if (portfolioContainer && portfolioHeading) {
    function setupPortfolioScroll() {
        ScrollTrigger.getAll().forEach(st => {
            if (st.trigger === document.querySelector("#portfolio")) st.kill();
        });

        const contentWidth = portfolioContainer.scrollWidth;
        const headingMargin = parseFloat(getComputedStyle(portfolioHeading).marginRight);
        const totalScrollWidth = contentWidth + headingMargin;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalScrollWidth - viewportWidth;

        gsap.to(portfolioContainer, {
            x: () => `-${scrollDistance}px`,
            ease: "none",
            scrollTrigger: {
                trigger: "#portfolio",
                start: "top top",
                end: () => `+=${scrollDistance}`,
                scrub: true,
                pin: true,
                markers: false,
                invalidateOnRefresh: true
            }
        });
    }

    setupPortfolioScroll();
    window.addEventListener("resize", setupPortfolioScroll);
}









const lenis = new Lenis()

lenis.on('scroll', (e) => {
    // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)