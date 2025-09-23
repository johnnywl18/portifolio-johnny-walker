document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    const mainSections = {
        services: document.getElementById('services'),
        skills: document.getElementById('skills'),
        about: document.getElementById('about'),
        projects: document.getElementById('projects')
    };

    const btnTecnico = document.getElementById('btn-tecnico');
    const btnEmpresas = document.getElementById('btn-empresas');
    const btnIdioma = document.getElementById('btn-idioma');

    let idioma = 'PT';
    let perfilAtual = 'tecnico';

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
        },
        EN: {
            menu: ["Start", "Services", "Skills", "About Me", "Projects"],
            hero: "Explore the universe, where every click takes you <span>beyond the stars</span>",
            btnTecnico: "Technical Profile",
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
        }
    };

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    };

    const toggleTheme = () => {
        const currentTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    };

    const loadTheme = () => {
        let savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            // Se não houver tema salvo, usa a preferência do sistema
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            savedTheme = prefersDark ? 'dark' : 'light';
        }
        applyTheme(savedTheme);
    };

    const initParticles = () => {
        const bgColor = getComputedStyle(body).getPropertyValue('--bg-color').trim();
        const particleColor = getComputedStyle(body).getPropertyValue('--accent-color-primary').trim();
        
        tsParticles.load("tsparticles", {
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: bgColor },
            particles: {
                number: { value: 65 },
                color: { value: particleColor },
                shape: { type: "circle" },
                opacity: { value: { min: 0.3, max: 0.8 } },
                size: { value: { min: 1.5, max: 2.5 } },
                move: { enable: true, speed: 0.4, direction: "none", outModes: { default: "out" } }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" }
                },
                modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
            },
            detectRetina: true
        });
    };


    const setText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = text;
    };

    const atualizarIdioma = () => {
        const t = textos[idioma];
        
        ['top', 'services', 'skills', 'about', 'projects'].forEach((item, i) => {
            setText(`#menu-${item}`, t.menu[i]);
            setText(`#menu-${item}-desktop`, t.menu[i]);
        });
        
        setText(".hero-text h2", t.hero);
        if (btnTecnico) btnTecnico.textContent = t.btnTecnico;
        if (btnEmpresas) btnEmpresas.textContent = t.btnEmpresas;
        if (btnIdioma) btnIdioma.textContent = idioma === "PT" ? "EN" : "PT";
        
        setText("#services-title", t.servicesTitle);
        setText("#skills-title", t.skillsTitle);
        setText("#projects-title", t.projectsTitle);
        setText("#about-title", t.aboutTitle);


        t.services.forEach((s, i) => {
            setText(`#service-${i + 1}-title`, s[0]);
            setText(`#service-${i + 1}-desc`, s[1]);
        });

        setText("#about-text-1", t.aboutTexts[perfilAtual][0]);
        setText("#about-text-2", t.aboutTexts[perfilAtual][1]);
    };


      const displaySections = (sectionsToShow = []) => {

        Object.values(mainSections).forEach(section => section.style.display = 'none');
        sectionsToShow.forEach(sectionKey => {
            if (mainSections[sectionKey]) {
                mainSections[sectionKey].style.display = 'block';
            }
        });
    };


    themeToggleButtons.forEach(btn => btn.addEventListener('click', () => {
        toggleTheme();
        initParticles(); 
    }));
    
    btnTecnico.addEventListener("click", () => {
        perfilAtual = "tecnico";
        displaySections(['skills', 'about', 'projects']);
        atualizarIdioma();
        mainSections.skills.scrollIntoView({ behavior: "smooth" });
    });

    btnEmpresas.addEventListener("click", () => {
        perfilAtual = "empresas";
        displaySections(['services', 'about', 'projects']);
        atualizarIdioma();
        mainSections.services.scrollIntoView({ behavior: "smooth" });
    });

    btnIdioma.addEventListener("click", () => {
        idioma = idioma === "PT" ? "EN" : "PT";
        atualizarIdioma();
    });

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('href').substring(1);

            switch(targetId) {
                case 'top':
                    displaySections();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                case 'services':
                    btnEmpresas.click();
                    break;
                case 'skills':
                    btnTecnico.click();
                    break;
                case 'about':
                case 'projects':
                    const section = mainSections[targetId];
                    if (section) {
                       displaySections([targetId]);
                       section.scrollIntoView({ behavior: 'smooth' });
                    }
                    break;
            }

            if (mobileMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });


    loadTheme();
    initParticles();
    displaySections();
    atualizarIdioma();
});