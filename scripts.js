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
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" }
            },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
        },
        detectRetina: true
    });

    const sectionServices = document.getElementById("services");
    const sectionSkills = document.getElementById("skills");
    const sectionAbout = document.getElementById("about");
    const sectionProjects = document.getElementById("projects");
    const btnTecnico = document.getElementById("btn-tecnico");
    const btnEmpresas = document.getElementById("btn-empresas");
    const btnIdioma = document.getElementById("btn-idioma");

    let idioma = "PT";
    let perfilAtual = "tecnico";

    const textos = {
        PT: {
            menu: ["Início", "Serviços", "Habilidades", "Sobre Mim", "Projetos"],
            hero: "Explore o universo, onde cada clique te leva <span>além das estrelas</span>",
            btnTecnico: "Perfil Profissional",
            btnEmpresas: "Soluções para Empresas",
            servicesTitle: "Serviços",
            skillsTitle: "Habilidades",
            aboutTitle: "Sobre Mim",
            aboutTexts: {
                tecnico: [
                    "Olá! Eu sou Johnny Walker, desenvolvedor front-end em transição de carreira. Atualmente estudo HTML, CSS e JavaScript no DevClub e estou construindo projetos modernos e responsivos.",
                    "Meu objetivo é criar experiências digitais envolventes e intuitivas, sempre com foco em aprendizado contínuo e evolução profissional."
                ],
                empresas: [
                    "Oferecemos soluções digitais completas para empresas, desde sites institucionais até lojas online e automação com IA.",
                    "Nosso objetivo é transformar seu negócio, tornando-o mais eficiente, moderno e competitivo no mercado digital."
                ]
            },
            services: [
                ["Desenvolvimento de Landing Pages", "Criamos páginas otimizadas para conversão, modernas e responsivas."],
                ["Sites Institucionais", "Construção de sites corporativos que transmitem credibilidade e profissionalismo."],
                ["Comércio Eletrônico", "Loja online moderna e segura, pronta para vender e aumentar suas vendas."],
                ["Automação com IA", "Integramos inteligência artificial para otimizar processos do seu negócio."],
                ["Prototipação do seu negócio", "Transformamos ideias em protótipos digitais para testar e validar projetos."],
                ["Atualização de Sites", "Atualizamos e modernizamos seu site com tecnologia e design atual."]
            ],
            projectsTitle: "Projetos",
            projects: [
                ["Loja de Carros", "Projeto fictício de vitrine de veículos, com foco em responsividade.", "Ver Projeto", "GitHub"],
                ["Projeto em Breve", ""],
                ["Projeto em Breve", ""]
            ]
        },
        EN: {
            menu: ["Start", "Services", "Skills", "About Me", "Projects"],
            hero: "Explore the universe, where every click takes you <span>beyond the stars</span>",
            btnTecnico: "Technical",
            btnEmpresas: "Business Solutions",
            servicesTitle: "Services",
            skillsTitle: "Skills",
            aboutTitle: "About Me",
            aboutTexts: {
                tecnico: [
                    "Hello! I'm Johnny Walker, a front-end developer in career transition. I currently study HTML, CSS, and JavaScript at DevClub and build modern, responsive projects.",
                    "My goal is to create engaging and intuitive digital experiences, always focusing on continuous learning and professional growth."
                ],
                empresas: [
                    "We offer complete digital solutions for businesses, from corporate websites to online stores and AI automation.",
                    "Our goal is to transform your business, making it more efficient, modern, and competitive in the digital market."
                ]
            },
            services: [
                ["Landing Page Development", "We create modern, responsive pages optimized for conversion."],
                ["Corporate Websites", "Building corporate websites that convey credibility and professionalism."],
                ["E-commerce", "Modern and secure online stores, ready to sell and increase your sales."],
                ["AI Automation", "We integrate artificial intelligence to optimize your business processes."],
                ["Business Prototyping", "We turn ideas into digital prototypes to test and validate projects."],
                ["Website Updates", "We update and modernize your website with current technology and design."]
            ],
            projectsTitle: "Projects",
            projects: [
                ["Car Store", "Fictional vehicle showcase project, focused on responsiveness.", "View Project", "GitHub"],
                ["Coming Soon", ""],
                ["Coming Soon", ""]
            ]
        }
    };

    function atualizarIdioma() {
        const t = textos[idioma];
        const setText = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = text;
        };

        setText("menu-top", t.menu[0]);
        setText("menu-services", t.menu[1]);
        setText("menu-skills", t.menu[2]);
        setText("menu-about", t.menu[3]);
        setText("menu-projects", t.menu[4]);

        setText("menu-top-desktop", t.menu[0]);
        setText("menu-services-desktop", t.menu[1]);
        setText("menu-skills-desktop", t.menu[2]);
        setText("menu-about-desktop", t.menu[3]);
        setText("menu-projects-desktop", t.menu[4]);

        const heroH2 = document.querySelector(".hero-text h2");
        if (heroH2) heroH2.innerHTML = t.hero;

        if (btnTecnico) btnTecnico.textContent = t.btnTecnico;
        if (btnEmpresas) btnEmpresas.textContent = t.btnEmpresas;
        btnIdioma.textContent = idioma === "PT" ? "EN" : "PT";

        setText("services-title", t.servicesTitle);
        t.services.forEach((s, i) => {
            setText(`service-${i + 1}-title`, s[0]);
            setText(`service-${i + 1}-desc`, s[1]);
        });

        setText("skills-title", t.skillsTitle);
        setText("projects-title", t.projectsTitle);

        const projectCards = document.querySelectorAll(".projects .service-card");
        projectCards.forEach((card, index) => {
            const h3 = card.querySelector("h3");
            const p = card.querySelector("p");
            const linksDiv = card.querySelector(".project-links");
            const projectData = t.projects[index];

            if (h3) h3.textContent = projectData[0];
            
            if (p) {
                p.textContent = projectData[1] || '';
                p.style.display = projectData[1] ? 'block' : 'none';
            }

            if (linksDiv) {
                linksDiv.style.display = projectData.length > 2 ? 'flex' : 'none';
                if (projectData.length > 2) {
                    const links = linksDiv.querySelectorAll("a");
                    if (links[0]) links[0].textContent = projectData[2];
                    if (links[1]) links[1].textContent = projectData[3];
                }
            }
        });

        setText("about-title", t.aboutTitle);
        setText("about-text-1", t.aboutTexts[perfilAtual][0]);
        setText("about-text-2", t.aboutTexts[perfilAtual][1]);
    }

    function handleMenuClick(targetId) {
        if (targetId === "top") {
            sectionServices.style.display = "none";
            sectionSkills.style.display = "none";
            sectionAbout.style.display = "none";
            sectionProjects.style.display = "none";
            document.getElementById("top").scrollIntoView({ behavior: "smooth" });
            return;
        }

        if (targetId === "services") {
            btnEmpresas.click();
        } else if (targetId === "skills") {
            btnTecnico.click();
        } else if (targetId === "about") {
            sectionServices.style.display = "none";
            sectionSkills.style.display = "none";
            sectionAbout.style.display = "block";
            sectionProjects.style.display = "none";
            atualizarIdioma();
        } else if (targetId === "projects") {
            sectionServices.style.display = "none";
            sectionSkills.style.display = "none";
            sectionAbout.style.display = "none";
            sectionProjects.style.display = "block";
            atualizarIdioma();
        }

        const sectionToShow = document.getElementById(targetId);
        if (sectionToShow) {
            sectionToShow.scrollIntoView({ behavior: "smooth" });
        }
    }

    btnTecnico.addEventListener("click", () => {
        perfilAtual = "tecnico";
        sectionServices.style.display = "none";
        sectionSkills.style.display = "block";
        sectionAbout.style.display = "block";
        sectionProjects.style.display = "block";
        atualizarIdioma();
        sectionSkills.scrollIntoView({ behavior: "smooth" });
    });

    btnEmpresas.addEventListener("click", () => {
        perfilAtual = "empresas";
        sectionServices.style.display = "block";
        sectionSkills.style.display = "none";
        sectionAbout.style.display = "block";
        sectionProjects.style.display = "block";
        atualizarIdioma();
        sectionServices.scrollIntoView({ behavior: "smooth" });
    });

    btnIdioma.addEventListener("click", () => {
        idioma = idioma === "PT" ? "EN" : "PT";
        atualizarIdioma();
    });

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('href').substring(1);
            handleMenuClick(targetId);
            if (mobileMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    sectionServices.style.display = "none";
    sectionSkills.style.display = "none";
    sectionAbout.style.display = "none";
    sectionProjects.style.display = "none";
    atualizarIdioma();
});