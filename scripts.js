window.addEventListener("load", () => {
  // Partículas
  tsParticles.load("tsparticles", {
    fullScreen: { enable: true },
    background: { color: "#000" },
    particles: {
      number: { value: 65 },
      color: { value: "#00eaff" },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: { enable: true, minimumValue: 0.3 }, anim: { enable: true, speed: 4, opacity_min: 0.3, sync: false } },
      size: { value: 2.5, random: { enable: true, minimumValue: 1.5 } },
      links: { enable: false },
      move: { enable: true, speed: 0.4, direction: "none", outModes: { default: "out" } }
    },
    interactivity: { events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } }, modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } } },
    detectRetina: true
  });

  // Seções
  const sectionServices = document.getElementById("services");
  const sectionSkills = document.getElementById("skills");
  const sectionAbout = document.getElementById("about");
  const sectionProjects = document.getElementById("projects");

  sectionServices.style.display = "none";
  sectionSkills.style.display = "none";
  sectionAbout.style.display = "none";
  sectionProjects.style.display = "none";

  // Botões do Hero
  const btnTecnico = document.getElementById("btn-tecnico");
  const btnEmpresas = document.getElementById("btn-empresas");
  const btnIdioma = document.getElementById("btn-idioma");

  let idioma = "PT"; // Estado atual do idioma

  btnTecnico.addEventListener("click", () => {
    sectionServices.style.display = "none";
    sectionSkills.style.display = "block";
    sectionAbout.style.display = "block";
    sectionProjects.style.display = "block";
    sectionSkills.scrollIntoView({ behavior: "smooth" });
  });

  btnEmpresas.addEventListener("click", () => {
    sectionServices.style.display = "block";
    sectionSkills.style.display = "none";
    sectionAbout.style.display = "block";
    sectionProjects.style.display = "block";
    sectionServices.scrollIntoView({ behavior: "smooth" });
  });

  // Função para alternar idioma
  btnIdioma.addEventListener("click", () => {
    if (idioma === "PT") {
      idioma = "EN";
      btnIdioma.textContent = "PT";

      // Header e menu
      document.getElementById("menu-top").textContent = "Start";
      document.getElementById("menu-services").textContent = "Services";
      document.getElementById("menu-skills").textContent = "Skills";
      document.getElementById("menu-about").textContent = "About Me";
      document.getElementById("menu-projects").textContent = "Projects";

      document.getElementById("menu-top-desktop").textContent = "Start";
      document.getElementById("menu-services-desktop").textContent = "Services";
      document.getElementById("menu-skills-desktop").textContent = "Skills";
      document.getElementById("menu-about-desktop").textContent = "About Me";
      document.getElementById("menu-projects-desktop").textContent = "Projects";

      // Hero
      document.querySelector(".hero-text h2").innerHTML = "Explore the universe, where every click takes you <span>beyond the stars</span>";

      // Serviços
      document.getElementById("services-title").textContent = "Services";
      document.getElementById("service-1-title").textContent = "Landing Page Development";
      document.getElementById("service-1-desc").textContent = "We create modern, responsive pages optimized for conversion.";
      document.getElementById("service-2-title").textContent = "Corporate Websites";
      document.getElementById("service-2-desc").textContent = "Building corporate websites that convey credibility and professionalism.";
      document.getElementById("service-3-title").textContent = "E-commerce";
      document.getElementById("service-3-desc").textContent = "Modern and secure online stores, ready to sell and increase your sales.";
      document.getElementById("service-4-title").textContent = "AI Automation";
      document.getElementById("service-4-desc").textContent = "We integrate artificial intelligence to optimize your business processes.";
      document.getElementById("service-5-title").textContent = "Business Prototyping";
      document.getElementById("service-5-desc").textContent = "We turn ideas into digital prototypes to test and validate projects.";
      document.getElementById("service-6-title").textContent = "Website Updates";
      document.getElementById("service-6-desc").textContent = "We update and modernize your website with current technology and design.";

      // Skills
      document.getElementById("skills-title").textContent = "Skills";

      // About
      document.getElementById("about-title").textContent = "About Me";
      document.getElementById("about-text-1").textContent = "Hello! I'm Johnny Walker, a front-end developer in career transition. I currently study HTML, CSS, and JavaScript at DevClub and build modern, responsive projects.";
      document.getElementById("about-text-2").textContent = "My goal is to create engaging and intuitive digital experiences, always focusing on continuous learning and professional growth.";

      // Projects
      document.getElementById("projects-title").textContent = "Projects coming soon";

    } else {
      idioma = "PT";
      btnIdioma.textContent = "EN";

      // Header e menu
      document.getElementById("menu-top").textContent = "Início";
      document.getElementById("menu-services").textContent = "Serviços";
      document.getElementById("menu-skills").textContent = "Habilidades";
      document.getElementById("menu-about").textContent = "Sobre Mim";
      document.getElementById("menu-projects").textContent = "Projetos";

      document.getElementById("menu-top-desktop").textContent = "Início";
      document.getElementById("menu-services-desktop").textContent = "Serviços";
      document.getElementById("menu-skills-desktop").textContent = "Habilidades";
      document.getElementById("menu-about-desktop").textContent = "Sobre Mim";
      document.getElementById("menu-projects-desktop").textContent = "Projetos";

      // Hero
      document.querySelector(".hero-text h2").innerHTML = "Explore o universo, onde cada clique te leva <span>além das estrelas</span>";

      // Serviços
      document.getElementById("services-title").textContent = "Serviços";
      document.getElementById("service-1-title").textContent = "Desenvolvimento de Landing Pages";
      document.getElementById("service-1-desc").textContent = "Criamos páginas otimizadas para conversão, modernas e responsivas.";
      document.getElementById("service-2-title").textContent = "Sites Institucionais";
      document.getElementById("service-2-desc").textContent = "Construção de sites corporativos que transmitem credibilidade e profissionalismo.";
      document.getElementById("service-3-title").textContent = "Comércio Eletrônico";
      document.getElementById("service-3-desc").textContent = "Loja online moderna e segura, pronta para vender e aumentar suas vendas.";
      document.getElementById("service-4-title").textContent = "Automação com IA";
      document.getElementById("service-4-desc").textContent = "Integramos inteligência artificial para otimizar processos do seu negócio.";
      document.getElementById("service-5-title").textContent = "Prototipação do seu negócio";
      document.getElementById("service-5-desc").textContent = "Transformamos ideias em protótipos digitais para testar e validar projetos.";
      document.getElementById("service-6-title").textContent = "Atualização de Sites";
      document.getElementById("service-6-desc").textContent = "Atualizamos e modernizamos seu site com tecnologia e design atual.";

      // Skills
      document.getElementById("skills-title").textContent = "Habilidades";

      // About
      document.getElementById("about-title").textContent = "Sobre Mim";
      document.getElementById("about-text-1").textContent = "Olá! Eu sou Johnny Walker, desenvolvedor front-end em transição de carreira. Atualmente estudo HTML, CSS e JavaScript no DevClub e estou construindo projetos modernos e responsivos.";
      document.getElementById("about-text-2").textContent = "Meu objetivo é criar experiências digitais envolventes e intuitivas, sempre com foco em aprendizado contínuo e evolução profissional.";

      // Projects
      document.getElementById("projects-title").textContent = "Projetos em breve";
    }
  });

});

// Menu mobile
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

// Scroll suave
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

// Header shrink
const header = document.querySelector("header");
const toggleHeader = () => { if (window.scrollY > 60) header.classList.add("shrink"); else header.classList.remove("shrink"); };
window.addEventListener("scroll", toggleHeader);
toggleHeader();
