window.addEventListener("load", () => {
  /* ======================== PARTICULAS ======================== */
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
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
    },
    detectRetina: true
  });

  /* ======================== SEÇÕES ======================== */
  const sectionServices = document.getElementById("services");
  const sectionSkills = document.getElementById("skills");
  const sectionAbout = document.getElementById("about");
  const sectionProjects = document.getElementById("projects");

  sectionServices.style.display = "none";
  sectionSkills.style.display = "none";
  sectionAbout.style.display = "none";
  sectionProjects.style.display = "none";

  /* ======================== BOTÕES HERO ======================== */
  const btnTecnico = document.getElementById("btn-tecnico");
  const btnEmpresas = document.getElementById("btn-empresas");
  const btnIdioma = document.getElementById("btn-idioma");

  let idioma = "PT"; // Estado inicial do idioma

  /* ======================== TRADUÇÃO ======================== */
  const textos = {
    PT: {
      menu: ["Início", "Serviços", "Habilidades", "Sobre Mim", "Projetos"],
      hero: "Explore o universo, onde cada clique te leva <span>além das estrelas</span>",
      btnTecnico: "Técnico",
      btnEmpresas: "Soluções para Empresas",
      servicesTitle: "Serviços",
      services: [
        ["Desenvolvimento de Landing Pages", "Criamos páginas otimizadas para conversão, modernas e responsivas."],
        ["Sites Institucionais", "Construção de sites corporativos que transmitem credibilidade e profissionalismo."],
        ["Comércio Eletrônico", "Loja online moderna e segura, pronta para vender e aumentar suas vendas."],
        ["Automação com IA", "Integramos inteligência artificial para otimizar processos do seu negócio."],
        ["Prototipação do seu negócio", "Transformamos ideias em protótipos digitais para testar e validar projetos."],
        ["Atualização de Sites", "Atualizamos e modernizamos seu site com tecnologia e design atual."]
      ],
      skillsTitle: "Habilidades",
      aboutTitle: "Sobre Mim",
      aboutTexts: [
        "Olá! Eu sou Johnny Walker, desenvolvedor front-end em transição de carreira. Atualmente estudo HTML, CSS e JavaScript no DevClub e estou construindo projetos modernos e responsivos.",
        "Meu objetivo é criar experiências digitais envolventes e intuitivas, sempre com foco em aprendizado contínuo e evolução profissional."
      ],
      projectsTitle: "Projetos",
      projects: [
        ["Landing Page", "Projeto fictício de uma landing page moderna e responsiva.", "Ver Projeto", "GitHub"],
        ["Loja de Carros", "Projeto fictício de vitrine de veículos, com foco em responsividade.", "Ver Projeto", "GitHub"],
        ["Portfólio Pessoal", "Meu próprio portfólio, desenvolvido do zero e otimizado para mobile.", "Ver Projeto", "GitHub"]
      ]
    },
    EN: {
      menu: ["Start", "Services", "Skills", "About Me", "Projects"],
      hero: "Explore the universe, where every click takes you <span>beyond the stars</span>",
      btnTecnico: "Technical",
      btnEmpresas: "Business Solutions",
      servicesTitle: "Services",
      services: [
        ["Landing Page Development", "We create modern, responsive pages optimized for conversion."],
        ["Corporate Websites", "Building corporate websites that convey credibility and professionalism."],
        ["E-commerce", "Modern and secure online stores, ready to sell and increase your sales."],
        ["AI Automation", "We integrate artificial intelligence to optimize your business processes."],
        ["Business Prototyping", "We turn ideas into digital prototypes to test and validate projects."],
        ["Website Updates", "We update and modernize your website with current technology and design."]
      ],
      skillsTitle: "Skills",
      aboutTitle: "About Me",
      aboutTexts: [
        "Hello! I'm Johnny Walker, a front-end developer in career transition. I currently study HTML, CSS, and JavaScript at DevClub and build modern, responsive projects.",
        "My goal is to create engaging and intuitive digital experiences, always focusing on continuous learning and professional growth."
      ],
      projectsTitle: "Projects",
      projects: [
        ["Landing Page", "Fictional project of a modern and responsive landing page.", "View Project", "GitHub"],
        ["Car Store", "Fictional vehicle showcase project, focused on responsiveness.", "View Project", "GitHub"],
        ["Personal Portfolio", "My own portfolio, built from scratch and optimized for mobile.", "View Project", "GitHub"]
      ]
    }
  };

  function atualizarIdioma() {
    const t = textos[idioma];

    // Menu desktop e mobile
    document.getElementById("menu-top").textContent = t.menu[0];
    document.getElementById("menu-services").textContent = t.menu[1];
    document.getElementById("menu-skills").textContent = t.menu[2];
    document.getElementById("menu-about").textContent = t.menu[3];
    document.getElementById("menu-projects").textContent = t.menu[4];

    document.getElementById("menu-top-desktop").textContent = t.menu[0];
    document.getElementById("menu-services-desktop").textContent = t.menu[1];
    document.getElementById("menu-skills-desktop").textContent = t.menu[2];
    document.getElementById("menu-about-desktop").textContent = t.menu[3];
    document.getElementById("menu-projects-desktop").textContent = t.menu[4];

    // Hero
    document.querySelector(".hero-text h2").innerHTML = t.hero;

    btnTecnico.textContent = t.btnTecnico;
    btnEmpresas.textContent = t.btnEmpresas;

    // Serviços
    document.getElementById("services-title").textContent = t.servicesTitle;
    t.services.forEach((s, i) => {
      document.getElementById(`service-${i+1}-title`).textContent = s[0];
      document.getElementById(`service-${i+1}-desc`).textContent = s[1];
    });

    // Skills
    document.getElementById("skills-title").textContent = t.skillsTitle;

    // About
    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text-1").textContent = t.aboutTexts[0];
    document.getElementById("about-text-2").textContent = t.aboutTexts[1];

    // Projects
    document.getElementById("projects-title").textContent = t.projectsTitle;
    const projectCards = document.querySelectorAll(".projects .service-card");
    projectCards.forEach((card, index) => {
      card.querySelector("h3").textContent = t.projects[index][0];
      card.querySelector("p").textContent = t.projects[index][1];
      const links = card.querySelectorAll(".project-links a");
      links[0].textContent = t.projects[index][2];
      links[1].textContent = t.projects[index][3];
    });
  }

  /* ======================== BOTÕES TÉCNICO / EMPRESAS ======================== */
  btnTecnico.addEventListener("click", () => {
    sectionServices.style.display = "none";
    sectionSkills.style.display = "block";
    sectionAbout.style.display = "block";
    sectionProjects.style.display = "block";
    atualizarIdioma();
    sectionSkills.scrollIntoView({ behavior: "smooth" });
  });

  btnEmpresas.addEventListener("click", () => {
    sectionServices.style.display = "block";
    sectionSkills.style.display = "none";
    sectionAbout.style.display = "block";
    sectionProjects.style.display = "block";
    atualizarIdioma();
    sectionServices.scrollIntoView({ behavior: "smooth" });
  });

  /* ======================== BOTÃO DE IDIOMA ======================== */
  btnIdioma.addEventListener("click", () => {
    idioma = idioma === "PT" ? "EN" : "PT";
    btnIdioma.textContent = idioma === "PT" ? "EN" : "PT";
    atualizarIdioma();
  });

  /* ======================== MENU HAMBÚRGUER ======================== */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  /* ======================== INICIALIZAÇÃO ======================== */
  atualizarIdioma();
});
