// ============================================
// PREMIUM INTERACTIVE BEHAVIORS
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId.startsWith('#')) return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ============================================
// THEME SWITCHER (DARK/LIGHT)
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// ============================================
// LANGUAGE SWITCHER (ES/EN)
// ============================================

const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'es';

const translations = {
    'es': {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre mí',
        'nav-experience': 'Experiencia',
        'nav-services': 'Servicios',
        'nav-portfolio': 'Proyectos',
        'nav-contact': 'Contacto',
        'hero-title': 'Hacemos que tus <span class="gradient-text">procesos trabajen</span> por ti',
        'hero-subtitle': 'Soluciones robustas que ahorran tiempo, reducen errores y generan resultados medibles.',
        'hero-cta': 'Ver Servicios',
        'about-title': 'Sobre mí',
        'about-p1': 'Soy <strong>Jonathan</strong> — combino análisis de datos, ingeniería de procesos y automatización para convertir tareas repetitivas en flujos automáticos.',
        'about-p2': 'Trabajo con equipos para entregar valor rápido y sostenible, transformando operaciones complejas en sistemas eficientes que impulsan el crecimiento.',
        'exp-title': 'Experiencia',
        'exp-subtitle': 'Mi trayectoria profesional y formación',
        'exp-1-role': 'Data & RPA Analyst',
        'exp-1-company': 'Grupo Torres Corzo',
        'exp-1-desc': 'Liderando la transformación digital mediante automatización de procesos y análisis avanzado de datos.',
        'exp-2-role': 'QA Lead & Security Auditor',
        'exp-2-company': 'Freelance / Consultoría',
        'exp-2-desc': 'Asegurando la calidad y seguridad de aplicaciones críticas mediante auditorías y pruebas automatizadas.',
        'exp-3-role': 'Ingeniería en Sistemas Computacionales',
        'exp-3-company': 'UNID',
        'exp-3-desc': 'Formación académica sólida en desarrollo de software y gestión de sistemas.',
        'services-title': 'Servicios',
        'services-subtitle': 'Soluciones profesionales que impulsan tu negocio',
        'service-1-title': 'Diseño Web Profesional',
        'service-1-desc': 'Sitios web que convierten. Rápidos, modernos y optimizados para resultados.',
        'service-1-f1': 'Diseño responsive premium',
        'service-1-f2': 'SEO y rendimiento optimizado',
        'service-1-f3': 'Soporte continuo',
        'service-2-title': 'Automatización RPA & Bots',
        'service-2-desc': 'Automatiza lo repetitivo. Ahorra tiempo, elimina errores, escala tu operación.',
        'service-2-f1': 'Integración con tus sistemas',
        'service-2-f2': 'Flujos robustos y monitoreados',
        'service-2-f3': 'ROI medible',
        'service-3-title': 'Marketing Digital & Growth',
        'service-3-desc': 'Estrategias basadas en datos. Campañas que crecen tu negocio.',
        'service-3-f1': 'Campañas orientadas a conversión',
        'service-3-f2': 'Analytics y optimización',
        'service-3-f3': 'Reportes accionables',
        'portfolio-title': 'Proyectos Destacados',
        'portfolio-subtitle': 'Casos de éxito y soluciones implementadas',
        'project-1-title': 'Ecosistema RPA Administrativo',
        'project-1-desc': 'Bots con Python y Selenium para extracción masiva y nómina, reduciendo tiempos en un 70%.',
        'project-2-title': 'BI Intelligence Dashboard',
        'project-2-desc': 'Visualización avanzada en Power BI con componentes HTML5/Tailwind para reportes ejecutivos.',
        'project-3-title': 'Auditoría de Seguridad API',
        'project-3-desc': 'Pruebas automatizadas y auditorías OWASP para servicios web institucionales robustos.',
        'contact-title': '¿Listo para transformar tu negocio?',
        'contact-subtitle': 'Escríbeme y te responderé con un plan claro y precios transparentes.',
        'form-name': 'Nombre',
        'form-email': 'Email',
        'form-message': 'Mensaje',
        'form-submit': 'Enviar Mensaje',
        'footer-rights': 'Todos los derechos reservados.'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About me',
        'nav-experience': 'Experience',
        'nav-services': 'Services',
        'nav-portfolio': 'Projects',
        'nav-contact': 'Contact',
        'hero-title': 'We make your <span class="gradient-text">processes work</span> for you',
        'hero-subtitle': 'Robust solutions that save time, reduce errors and generate measurable results.',
        'hero-cta': 'View Services',
        'about-title': 'About me',
        'about-p1': "I'm <strong>Jonathan</strong> — I combine data analysis, process engineering and automation to turn repetitive tasks into automatic flows.",
        'about-p2': 'I work with teams to deliver fast and sustainable value, transforming complex operations into efficient systems that drive growth.',
        'exp-title': 'Experience',
        'exp-subtitle': 'My professional career and education',
        'exp-1-role': 'Data & RPA Analyst',
        'exp-1-company': 'Torres Corzo Group',
        'exp-1-desc': 'Leading digital transformation through process automation and advanced data analysis.',
        'exp-2-role': 'QA Lead & Security Auditor',
        'exp-2-company': 'Freelance / Consulting',
        'exp-2-desc': 'Ensuring quality and security of critical applications through audits and automated testing.',
        'exp-3-role': 'Computer Systems Engineering',
        'exp-3-company': 'UNID',
        'exp-3-desc': 'Solid academic background in software development and systems management.',
        'services-title': 'Services',
        'services-subtitle': 'Professional solutions that boost your business',
        'service-1-title': 'Professional Web Design',
        'service-1-desc': 'Websites that convert. Fast, modern and optimized for results.',
        'service-1-f1': 'Premium responsive design',
        'service-1-f2': 'SEO and performance optimized',
        'service-1-f3': 'Continuous support',
        'service-2-title': 'RPA Automation & Bots',
        'service-2-desc': 'Automate the repetitive. Save time, eliminate errors, scale your operation.',
        'service-2-f1': 'Integration with your systems',
        'service-2-f2': 'Robust and monitored flows',
        'service-2-f3': 'Measurable ROI',
        'service-3-title': 'Digital Marketing & Growth',
        'service-3-desc': 'Data-driven strategies. Campaigns that grow your business.',
        'service-3-f1': 'Conversion-oriented campaigns',
        'service-3-f2': 'Analytics and optimization',
        'service-3-f3': 'Actionable reports',
        'portfolio-title': 'Featured Projects',
        'portfolio-subtitle': 'Success stories and implemented solutions',
        'project-1-title': 'Administrative RPA Ecosystem',
        'project-1-desc': 'Bots with Python and Selenium for mass extraction and payroll, reducing times by 70%.',
        'project-2-title': 'BI Intelligence Dashboard',
        'project-2-desc': 'Advanced visualization in Power BI with HTML5/Tailwind components for executive reports.',
        'project-3-title': 'API Security Audit',
        'project-3-desc': 'Automated testing and OWASP audits for robust institutional web services.',
        'contact-title': 'Ready to transform your business?',
        'contact-subtitle': 'Write to me and I will respond with a clear plan and transparent pricing.',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        'footer-rights': 'All rights reserved.'
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    document.documentElement.lang = lang;
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    updateLanguage(currentLang);
});

// Initialize language
updateLanguage(currentLang);

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Special handling for service cards
            if (entry.target.classList.contains('service-card')) {
                entry.target.classList.add('animate');
            }
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ============================================
// SERVICE CARD 3D TILT EFFECT
// ============================================

const tiltCards = document.querySelectorAll('.service-card, .portfolio-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        mobileMenuBtn.textContent = navLinksContainer.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking any link inside it
    navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        });
    });
}

// ============================================
// FORM HANDLING
// ============================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        const formData = new FormData(contactForm);

        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                submitBtn.textContent = currentLang === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!';
                submitBtn.style.backgroundColor = '#48bb78'; // success green
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 5000);
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    throw new Error(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    throw new Error("Oops! There was a problem submitting your form");
                }
            }
        } catch (error) {
            console.error('Form error:', error);
            submitBtn.textContent = currentLang === 'es' ? 'Error al enviar' : 'Error sending';
            submitBtn.style.backgroundColor = '#f56565'; // error red
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
            }, 5000);
        }
    });
}

// ============================================
// PERFORMANCE & ACCESSIBILITY
// ============================================

// Focus management
const focusableElements = document.querySelectorAll('a, button, input, textarea');
focusableElements.forEach(el => {
    el.addEventListener('focus', () => {
        el.style.outline = '2px solid var(--color-accent-purple)';
        el.style.outlineOffset = '4px';
    });
    
    el.addEventListener('blur', () => {
        el.style.outline = 'none';
    });
});

console.log('🚀 Website upgraded successfully!');
