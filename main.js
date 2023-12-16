const lenis = new Lenis();
AOS.init();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const date = new Date();
document.getElementById("year").innerText = date.getFullYear();
