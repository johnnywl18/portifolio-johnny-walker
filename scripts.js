window.addEventListener("load", () => {
tsParticles.load("tsparticles", {
fullScreen: { enable: true },
background: { color: "#000" },
particles: {
number: { value: 65 },
color: { value: "#00eaff" },
shape: { type: "circle" },
opacity: {
value: 0.8,
random: { enable: true, minimumValue: 0.3 },
anim: { enable: true, speed: 4, opacity_min: 0.3, sync: false }
},
size: { value: 2.5, random: { enable: true, minimumValue: 1.5 } },
links: { enable: false },
move: { enable: true, speed: 0.4, direction: "none", outModes: { default: "out" } }
},
interactivity: {
events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
},
detectRetina: true
});
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
menuToggle.classList.toggle("active");
mobileMenu.classList.toggle("active");
});
document.querySelectorAll(".mobile-menu a").forEach(link => {
link.addEventListener("click", () => {
menuToggle.classList.remove("active");
mobileMenu.classList.remove("active");
});
});

const HEADER_OFFSET = 70;
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", e => {
e.preventDefault();
const href = link.getAttribute("href");
if (href === "#top") return window.scrollTo({ top: 0, behavior: "smooth" });
const target = document.querySelector(href);
if (!target) return;
const y = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
window.scrollTo({ top: y, behavior: "smooth" });
});
});

const header = document.querySelector("header");
const toggleHeader = () => {
if (window.scrollY > 60) header.classList.add("shrink");
else header.classList.remove("shrink");
};
window.addEventListener("scroll", toggleHeader);
toggleHeader();
