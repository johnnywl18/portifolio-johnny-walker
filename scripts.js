// ===== tsParticles Config =====
tsParticles.load("tsparticles", {
  fullScreen: { enable: true },
  background: { color: "#000" },
  particles: {
    number: { value: 120 },
    color: { value: "#00eaff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: { enable: true, minimumValue: 0.3 },
      anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
    },
    size: { value: 2.5, random: { enable: true, minimumValue: 1.5 } },
    links: { enable: true, distance: 130, color: "#00eaff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "out" } }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
  },
  detectRetina: true
});

// ===== Menu Hambúrguer =====
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});
