gsap.registerPlugin(ScrollTrigger);
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function aqualane() {
  if (document.querySelector(".sections")) {
    //Progress
    const timeline2 = gsap.timeline();
    ScrollTrigger.create({
      animation: timeline2,
      trigger: ".sections",
      scrub: 1,
      start: "top center",
      end: () => "+=" + document.querySelector(".sections").offsetHeight + "center",
      //markers: true,
    });
    timeline2.from(".aqualane-progress img", {
      right: "100%",
      ease: "none",
    });
  }
}
function history() {
  if (document.getElementById("container")) {
    let container = document.getElementById("container");
    if (document.documentElement.clientWidth < container.scrollWidth) {
      gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          pin: "#container-history",
          scrub: 1,
          end: () => "+=" + container.offsetWidth,
          //markers: true,
        },
      });
      //Progress
      const timeline = gsap.timeline();
      ScrollTrigger.create({
        animation: timeline,
        trigger: container,
        scrub: 1,
        start: "center center",
        bottom: "bottom center",
        end: () => "+=" + container.offsetWidth,
        //markers: true,
      });
      timeline.from(".progress-history", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
      });
    }
  }
}
function lineDevelopment() {
  if (document.getElementById("dev-content") && window.matchMedia("(min-width: 1024px)").matches) {
    /* Capacidades */
    const sections = gsap.utils.toArray(".dev-list li");
    const text = document.querySelectorAll(".number p");
    const lista = document.getElementById("dev-list").offsetHeight;
    const tlSvg = gsap.timeline();
    ScrollTrigger.create({
      animation: tlSvg,
      trigger: "#dev-cap",
      pin: true,
      end: `+=${lista * 5} top`,
      scrub: 1,
      //markers: true,
      id: "container",
    });
    tlSvg.to(sections[0], { opacity: 0, top: "40%", ease: "none", duration: 0.5 });
    tlSvg.to(text, { translateY: "-100%", duration: 0.5 });
    tlSvg.to(sections[1], { opacity: 1, top: "50%", ease: "none", duration: 0.5 });
    tlSvg.to(sections[1], { opacity: 0, top: "40%", ease: "none", duration: 0.5 });
    tlSvg.to(text, { translateY: "-200%", duration: 0.5 });
    tlSvg.to(sections[2], { opacity: 1, top: "50%", ease: "none", duration: 0.5 });

    const path = document.querySelector(".line1 path");
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;
    let scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const tlSvg1 = gsap.timeline();
    ScrollTrigger.create({
      animation: tlSvg1,
      trigger: "#dev-cap",
      start: "top center",
      end: `+=${lista * 5} top`,
      scrub: 1,
      //markers: true,
      id: "circle",
    });
    tlSvg1.to(path, { strokeDashoffset: pathLength * scrollPercent });

    /* Products */
    const sectionsProd = gsap.utils.toArray(".prod-list li");
    const listaProd = document.getElementById("prod-list").offsetHeight;
    const tlSvgProd = gsap.timeline();
    ScrollTrigger.create({
      animation: tlSvgProd,
      trigger: "#dev-products",
      pin: true,
      end: `+=${listaProd} top`,
      scrub: 1,
      //markers: true,
      id: "container",
    });
    tlSvgProd.to(sectionsProd[0], { opacity: 0, top: "40%", ease: "none", duration: 0.75 });
    tlSvgProd.to(sectionsProd[1], { opacity: 1, top: "50%", ease: "none", duration: 1 });
    tlSvgProd.to(sectionsProd[1], { opacity: 0, top: "40%", ease: "none", duration: 0.75 });
    tlSvgProd.to(sectionsProd[2], { opacity: 1, top: "50%", ease: "none", duration: 1 });

    const prodPath = document.querySelector(".line3 path");
    const prodPathLength = prodPath.getTotalLength();
    prodPath.style.strokeDasharray = prodPathLength + " " + prodPathLength;
    prodPath.style.strokeDashoffset = prodPathLength;
    const tlSvgProd1 = gsap.timeline();
    ScrollTrigger.create({
      animation: tlSvgProd1,
      trigger: "#dev-products",
      start: "top center",
      end: `+=${listaProd} top`,
      scrub: 1,
      //markers: true,
      id: "circle",
    });
    tlSvgProd1.to(prodPath, { strokeDashoffset: prodPathLength * scrollPercent });

    /* Secciones cortas */
    const devSections = document.querySelectorAll(".dev-sect");
    devSections.forEach((section) => {
      const pathSvg = section.querySelector(".line path");
      const pathSvgsLength = pathSvg.getTotalLength();
      pathSvg.style.strokeDasharray = pathSvgsLength + " " + pathSvgsLength;
      pathSvg.style.strokeDashoffset = pathSvgsLength;
      const tlSvgs = gsap.timeline();
      ScrollTrigger.create({
        animation: tlSvgs,
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        //markers: true,
        id: "waves",
      });
      if (section.querySelector(".line").classList.contains("line2")) {
        tlSvgs.to(".line2 path", { strokeDashoffset: pathSvgsLength * scrollPercent });
      } else if (section.querySelector(".line").classList.contains("line4")) {
        tlSvgs.to(".line4 path", { strokeDashoffset: pathSvgsLength * scrollPercent });
      }
    });
  }
}
function floatingImages() {
  const texts = document.querySelectorAll(".coop-text");
  texts.forEach((text) => {
    const tlImg = gsap.timeline();
    ScrollTrigger.create({
      animation: tlImg,
      trigger: text,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      //markers: true,
      id: "ball",
    });
    const image = text.querySelector(".img-circle");
    tlImg.to(image, { translateY: "-5%" });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  aqualane();
  history();
  lineDevelopment();
  floatingImages();
});
