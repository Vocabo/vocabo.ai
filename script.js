document.addEventListener('DOMContentLoaded', () => {
    const langDeBtn = document.getElementById('langDe');
    const langEnBtn = document.getElementById('langEn');
    const footerLangDeBtn = document.getElementById('footerLangDe');
    const footerLangEnBtn = document.getElementById('footerLangEn');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const heroCta = document.querySelector('.hero-cta');
    const heroSecondaryCta = document.querySelector('.hero-secondary-cta');
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLeft = document.querySelector('.nav-left');
    const navMenu = document.querySelector('.nav-menu');
    const navRight = document.querySelector('.nav-right');
    const navLinks = document.querySelectorAll('.nav-link');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // GSAP und ScrollTrigger initialisieren, wenn verfügbar
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        initAnimations();
    }
    
    // Particles.js initialisieren, wenn verfügbar
    if (window.particlesJS) {
        initParticles();
    }
    
    // Three.js initialisieren, wenn verfügbar
    if (window.THREE) {
        // Diese Funktion deaktivieren, da die 3D-Formen entfernt werden sollen
        // init3DBackground();
        console.log('3D Background deaktiviert - nur schwebende Wörter werden angezeigt');
    }
    
    // Vanilla-Tilt initialisieren, wenn verfügbar
    if (window.VanillaTilt) {
        initTilt();
    }

    // Erweiterte Übersetzungen für die modernisierte Website
    const translations = {
        de: {
            siteTitle: "vocabo.ai - Sprachen lernen mit KI",
            navHome: "Startseite",
            navFeatures: "Funktionen",
            navPricing: "Preise",
            navTestimonials: "Testimonials",
            navFAQ: "FAQ",
            loginButton: "Anmelden",
            registerButton: "Registrieren",
            heroTitle: "Lerne Sprachen mit der Kraft der KI",
            heroSubtitle: "Mit vocabo.ai und künstlicher Intelligenz personalisierte Lektionen und Übungen für Englisch und Französisch entdecken.",
            heroCTA: "Jetzt starten",
            heroSecondaryCTA: "Demo ansehen",
            scrollDown: "Nach unten scrollen",
            statUsers: "Nutzer",
            statLessons: "Lektionen",
            statLanguages: "Sprachen",
            featuresTitle: "Unsere Funktionen",
            featuresSubtitle: "Entdecke, was unsere Plattform besonders macht",
            feature1Title: "KI-generierte Lektionen",
            feature1Desc: "Vokabeln und Grammatik, maßgeschneidert von der Gemini API für deinen persönlichen Lernfortschritt.",
            feature2Title: "Interaktive Übungen",
            feature2Desc: "Teste dein Wissen mit dynamisch erstellten Aufgaben, die sich an dein Niveau anpassen.",
            feature3Title: "Fortschritt verfolgen",
            feature3Desc: "Behalte deinen Lernfortschritt immer im Blick mit übersichtlichen Statistiken und Visualisierungen.",
            feature4Title: "Mehrsprachige Plattform",
            feature4Desc: "Webseite auf Deutsch & Englisch, Lektionen für Englisch & Französisch.",
            featureHighlight: "KI-Power im Einsatz",
            showcaseTitle: "Lerne auf deine Art",
            showcaseDesc: "Unsere intelligente Plattform passt sich deinem Lerntempo und deinen Interessen an. Die KI erstellt personalisierte Lektionen, die genau auf deine Bedürfnisse zugeschnitten sind.",
            showcasePoint1: "Personalisierte Vokabelpakete",
            showcasePoint2: "Kontextbasierte Grammatikübungen",
            showcasePoint3: "Sprachunterstützung durch KI",
            howItWorksTitle: "So funktioniert's",
            step1Title: "Registriere dich",
            step1Desc: "Erstelle ein Konto und teile uns deine Sprachlernziele mit.",
            step2Title: "KI-Analyse",
            step2Desc: "Unsere KI erstellt einen personalisierten Lernplan basierend auf deinen Zielen.",
            step3Title: "Lerne & Übe",
            step3Desc: "Arbeite mit maßgeschneiderten Lektionen und interaktiven Übungen.",
            step4Title: "Verfolge Fortschritte",
            step4Desc: "Sieh dir deine Fortschritte an und feiere deine Erfolge.",
            pricingTitle: "Preispläne",
            pricingSubtitle: "Flexible Pläne für jedes Lernbedürfnis",
            pricingBadge1: "Beliebt",
            pricingBadge2: "Empfohlen",
            pricingBadge3: "Neu",
            pricingFree: "Kostenlos",
            pricingPremium: "Premium",
            pricingBusiness: "Business",
            pricingFeature1Free: "Grundlegende Lektionen",
            pricingFeature2Free: "Begrenzte KI-Übungen",
            pricingFeature3Free: "Zugang zu Community",
            pricingFeature1Premium: "Unbegrenzte Lektionen",
            pricingFeature2Premium: "Voller KI-Zugang",
            pricingFeature3Premium: "Persönlicher Lernplan",
            pricingFeature4Premium: "Fortgeschrittene Übungen",
            pricingFeature1Business: "Team-Verwaltung",
            pricingFeature2Business: "Fortschrittsberichte",
            pricingFeature3Business: "Anpassbare Lernpläne",
            pricingFeature4Business: "Prioritäts-Support",
            pricingButtonFree: "Starten",
            pricingButtonPremium: "Jetzt upgraden",
            pricingButtonBusiness: "Kontaktiere uns",
            testimonialsTitle: "Das sagen unsere Nutzer",
            testimonialsSubtitle: "Erfahrungen von Lernenden wie dir",
            testimonial1: "\"Ich lerne seit einem Monat Französisch mit vocabo.ai und bin begeistert, wie gut die KI meinen Lernstil versteht.\"",
            testimonial2: "\"Die personalisierten Übungen haben mir geholfen, mein Englisch auf ein neues Level zu bringen. Absolut empfehlenswert!\"",
            testimonial3: "\"vocabo.ai hat meine Art zu lernen revolutioniert. Die KI erkennt genau, wo meine Schwachstellen sind und hilft mir gezielt.\"",
            testimonialInfo1: "Französisch-Lernende, 3 Monate",
            testimonialInfo2: "Englisch-Lernender, 6 Monate",
            testimonialInfo3: "Mehrsprachige Lernende, 1 Jahr",
            faqTitle: "Häufig gestellte Fragen",
            faqSubtitle: "Antworten auf deine Fragen",
            faqQuestion1: "Wie funktioniert die KI-Personalisierung?",
            faqAnswer1: "Unsere KI analysiert deine Lernmuster, Stärken und Schwächen und erstellt dann maßgeschneiderte Lektionen und Übungen, die genau auf deine Bedürfnisse zugeschnitten sind.",
            faqQuestion2: "Kann ich zwischen Sprachen wechseln?",
            faqAnswer2: "Ja, du kannst jederzeit zwischen Englisch und Französisch wechseln oder beide Sprachen parallel lernen.",
            faqQuestion3: "Wie oft werden neue Inhalte hinzugefügt?",
            faqAnswer3: "Da unsere Inhalte durch KI generiert werden, entstehen kontinuierlich neue Lektionen und Übungen, die auf deine Fortschritte und Interessen abgestimmt sind.",
            faqQuestion4: "Kann ich vocabo.ai auf allen Geräten nutzen?",
            faqAnswer4: "Ja, vocabo.ai ist vollständig responsiv und funktioniert auf Desktops, Tablets und Smartphones. Dein Lernfortschritt wird über alle Geräte hinweg synchronisiert.",
            ctaTitle: "Bereit, deine Sprachreise zu beginnen?",
            ctaDescription: "Melde dich jetzt an und entdecke eine neue Art des Sprachenlernens mit vocabo.ai.",
            ctaButton: "Jetzt starten",
            ctaButtonSecondary: "Mehr erfahren",
            footerSlogan: "Revolutionäres Sprachenlernen mit KI",
            footerCol1Title: "Navigation",
            footerCol2Title: "Ressourcen",
            footerCol3Title: "Rechtliches",
            footerCol4Title: "Newsletter",
            footerBlog: "Blog",
            footerSupport: "Support",
            footerAbout: "Über uns",
            footerContact: "Kontakt",
            footerTerms: "AGB",
            footerPrivacy: "Datenschutz",
            footerImprint: "Impressum",
            footerCookies: "Cookie-Richtlinie",
            footerNewsletterDesc: "Melde dich für Updates an:",
            footerSubscribe: "Abonnieren",
            footerRights: "Alle Rechte vorbehalten.",
            loginMessage: "Anmeldung mit E-Mail: team.vocabo.ai@gmail.com, Passwort: 12345678",
            registerMessage: "Registrierung wird vorbereitet...",
            loginSuccess: "Erfolgreich angemeldet! Weiterleitung zum Dashboard..."
        },
        en: {
            siteTitle: "vocabo.ai - Learn Languages with AI",
            navHome: "Home",
            navFeatures: "Features",
            navPricing: "Pricing",
            navTestimonials: "Testimonials",
            navFAQ: "FAQ",
            loginButton: "Login",
            registerButton: "Register",
            heroTitle: "Learn Languages with the Power of AI",
            heroSubtitle: "Discover personalized lessons and exercises for English and French with vocabo.ai and artificial intelligence.",
            heroCTA: "Get started",
            heroSecondaryCTA: "Watch demo",
            scrollDown: "Scroll down",
            statUsers: "Users",
            statLessons: "Lessons",
            statLanguages: "Languages",
            featuresTitle: "Our Features",
            featuresSubtitle: "Discover what makes our platform special",
            feature1Title: "AI-Generated Lessons",
            feature1Desc: "Vocabulary and grammar, tailor-made by the Gemini API for your personal learning progress.",
            feature2Title: "Interactive Exercises",
            feature2Desc: "Test your knowledge with dynamically created tasks that adapt to your level.",
            feature3Title: "Track Progress",
            feature3Desc: "Keep track of your learning progress with clear statistics and visualizations.",
            feature4Title: "Multilingual Platform",
            feature4Desc: "Website in German & English, lessons for English & French.",
            featureHighlight: "AI Power in Action",
            showcaseTitle: "Learn Your Way",
            showcaseDesc: "Our intelligent platform adapts to your learning pace and interests. The AI creates personalized lessons tailored exactly to your needs.",
            showcasePoint1: "Personalized Vocabulary Sets",
            showcasePoint2: "Context-based Grammar Exercises",
            showcasePoint3: "AI Language Support",
            howItWorksTitle: "How It Works",
            step1Title: "Register",
            step1Desc: "Create an account and share your language learning goals with us.",
            step2Title: "AI Analysis",
            step2Desc: "Our AI creates a personalized learning plan based on your goals.",
            step3Title: "Learn & Practice",
            step3Desc: "Work with custom-made lessons and interactive exercises.",
            step4Title: "Track Progress",
            step4Desc: "View your progress and celebrate your successes.",
            pricingTitle: "Pricing Plans",
            pricingSubtitle: "Flexible plans for every learning need",
            pricingBadge1: "Popular",
            pricingBadge2: "Recommended",
            pricingBadge3: "New",
            pricingFree: "Free",
            pricingPremium: "Premium",
            pricingBusiness: "Business",
            pricingFeature1Free: "Basic Lessons",
            pricingFeature2Free: "Limited AI Exercises",
            pricingFeature3Free: "Community Access",
            pricingFeature1Premium: "Unlimited Lessons",
            pricingFeature2Premium: "Full AI Access",
            pricingFeature3Premium: "Personal Learning Plan",
            pricingFeature4Premium: "Advanced Exercises",
            pricingFeature1Business: "Team Management",
            pricingFeature2Business: "Progress Reports",
            pricingFeature3Business: "Customizable Learning Plans",
            pricingFeature4Business: "Priority Support",
            pricingButtonFree: "Start",
            pricingButtonPremium: "Upgrade Now",
            pricingButtonBusiness: "Contact Us",
            testimonialsTitle: "What Our Users Say",
            testimonialsSubtitle: "Experiences from learners like you",
            testimonial1: "\"I've been learning French with vocabo.ai for a month and I'm amazed at how well the AI understands my learning style.\"",
            testimonial2: "\"The personalized exercises helped me take my English to a new level. Highly recommended!\"",
            testimonial3: "\"vocabo.ai has revolutionized the way I learn. The AI identifies exactly where my weaknesses are and helps me specifically.\"",
            testimonialInfo1: "French learner, 3 months",
            testimonialInfo2: "English learner, 6 months",
            testimonialInfo3: "Multilingual learner, 1 year",
            faqTitle: "Frequently Asked Questions",
            faqSubtitle: "Answers to your questions",
            faqQuestion1: "How does AI personalization work?",
            faqAnswer1: "Our AI analyzes your learning patterns, strengths, and weaknesses, then creates customized lessons and exercises tailored specifically to your needs.",
            faqQuestion2: "Can I switch between languages?",
            faqAnswer2: "Yes, you can switch between English and French at any time or learn both languages in parallel.",
            faqQuestion3: "How often is new content added?",
            faqAnswer3: "Since our content is generated by AI, new lessons and exercises are continuously created, aligned with your progress and interests.",
            faqQuestion4: "Can I use vocabo.ai on all devices?",
            faqAnswer4: "Yes, vocabo.ai is fully responsive and works on desktops, tablets, and smartphones. Your learning progress is synchronized across all devices.",
            ctaTitle: "Ready to start your language journey?",
            ctaDescription: "Sign up now and discover a new way of language learning with vocabo.ai.",
            ctaButton: "Get Started",
            ctaButtonSecondary: "Learn More",
            footerSlogan: "Revolutionary Language Learning with AI",
            footerCol1Title: "Navigation",
            footerCol2Title: "Resources",
            footerCol3Title: "Legal",
            footerCol4Title: "Newsletter",
            footerBlog: "Blog",
            footerSupport: "Support",
            footerAbout: "About Us",
            footerContact: "Contact",
            footerTerms: "Terms of Service",
            footerPrivacy: "Privacy Policy",
            footerImprint: "Imprint",
            footerCookies: "Cookie Policy",
            footerNewsletterDesc: "Sign up for updates:",
            footerSubscribe: "Subscribe",
            footerRights: "All rights reserved.",
            loginMessage: "Login with email: team.vocabo.ai@gmail.com, password: 12345678",
            registerMessage: "Registration is being prepared...",
            loginSuccess: "Successfully logged in! Redirecting to dashboard..."
        }
    };

    // Animationen initialisieren
    function initAnimations() {
        // Header Animation beim Scrollen
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Verbesserte How-it-works-Animationen
        const timelineItems = document.querySelectorAll('.timeline-item-wrapper');
        
        timelineItems.forEach((item, index) => {
            gsap.set(item, { 
                opacity: 0,
                y: 50
            });
            
            ScrollTrigger.create({
                trigger: item,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(item, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "power3.out"
                    });
                },
                once: true
            });
        });
        
        // Animate Überschriften und Elemente beim Scrollen
        gsap.utils.toArray('.section-heading').forEach(heading => {
            gsap.from(heading, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 80%'
                }
            });
        });
        
        // Animiere Feature-Karten
        gsap.utils.toArray('.feature-item').forEach((card, index) => {
            gsap.from(card, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            });
        });
        
        // Animiere Statistikzahlen
        gsap.utils.toArray('.stat-number').forEach(stat => {
            const targetValue = parseInt(stat.getAttribute('data-count'));
            
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 80%',
                onEnter: () => {
                    countUp(stat, targetValue);
                }
            });
        });
        
        // Glow Effekt auf Buttons
        document.querySelectorAll('.glow-effect').forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const glowEl = this.querySelector('.glow');
                if (glowEl) {
                    glowEl.style.left = `${x}px`;
                    glowEl.style.top = `${y}px`;
                    glowEl.style.opacity = '1';
                    
                    gsap.to(glowEl, {
                        width: '200%',
                        height: '200%',
                        opacity: 0,
                        duration: 1,
                        ease: 'power4.out'
                    });
                }
            });
        });
    }
    
    // Zahlen hochzählen
    function countUp(element, target) {
        let count = 0;
        const duration = 2000; // 2 Sekunden
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;
        
        const counter = setInterval(() => {
            count += increment;
            if (count >= target) {
                element.innerText = target.toLocaleString();
                clearInterval(counter);
            } else {
                element.innerText = Math.floor(count).toLocaleString();
            }
        }, frameDuration);
    }
    
    // Floating Words Background
    function createFloatingWords() {
        const container = document.getElementById('floating-words-container');
        const words = [
            'English', 'Français', 'Learning', 'Vocabulary', 
            'Grammar', 'Practice', 'Speak', 'Write', 
            'Listen', 'Read', 'Fluent', 'Language',
            'AI', 'Hello', 'Bonjour', 'Word',
            'Sentence', 'Phrase', 'Translate', 'Understand',
            'Dictionary', 'Alphabet', 'Idiom', 'Spelling',
            'Accent', 'Native', 'Study', 'Conjugate'
        ];
        
        // Mehrsprachige Wörter
        const languages = {
            'de': ['Englisch', 'Französisch', 'Lernen', 'Vokabeln', 
                   'Grammatik', 'Üben', 'Sprechen', 'Schreiben', 
                   'Hören', 'Lesen', 'Fließend', 'Sprache',
                   'KI', 'Hallo', 'Bonjour', 'Wort',
                   'Satz', 'Phrase', 'Übersetzen', 'Verstehen',
                   'Wörterbuch', 'Alphabet', 'Redewendung', 'Rechtschreibung',
                   'Akzent', 'Muttersprachler', 'Lernen', 'Konjugieren'],
            'en': words
        };
        
        // Aktuelle Sprache bestimmen
        let currentLang = localStorage.getItem('language') || 'de';
        let wordsList = languages[currentLang];
        
        // Erstelle 40 Wörter - doppelt so viele wie vorher
        for (let i = 0; i < 40; i++) {
            const word = document.createElement('div');
            word.className = 'floating-word';
            word.textContent = wordsList[i % wordsList.length];
            
            // Zufällige Positionen
            const x = Math.random() * 100; // %
            const delay = Math.random() * 30; // Sekunden
            const duration = 20 + Math.random() * 20; // 20-40 Sekunden
            const size = 1 + Math.random() * 2; // Größer: 1-3rem statt 0.8-2rem
            const opacity = 0.05 + Math.random() * 0.15; // Höher: 0.05-0.2 statt 0.03-0.1
            
            // Zufällige Animation-Variante für mehr Vielfalt
            const animationVariant = Math.floor(Math.random() * 4);
            
            word.style.left = `${x}%`;
            word.style.animationDelay = `${delay}s`;
            word.style.animationDuration = `${duration}s`;
            word.style.fontSize = `${size}rem`;
            word.style.opacity = opacity;
            
            // Verschiedene Bewegungsrichtungen
            if (animationVariant === 1) {
                word.style.animationName = 'floatWordRight';
            } else if (animationVariant === 2) {
                word.style.animationName = 'floatWordLeft';
            } else if (animationVariant === 3) {
                word.style.animationName = 'floatWordDiagonal';
            }
            
            container.appendChild(word);
        }
        
        // Wörter erneuern, wenn die Sprache wechselt
        function updateWords() {
            const newLang = localStorage.getItem('language') || 'de';
            if (newLang !== currentLang) {
                currentLang = newLang;
                wordsList = languages[currentLang];
                
                const wordElements = document.querySelectorAll('.floating-word');
                wordElements.forEach((el, index) => {
                    el.textContent = wordsList[index % wordsList.length];
                });
            }
        }
        
        // Prüfe regelmäßig, ob die Sprache gewechselt wurde
        setInterval(updateWords, 2000);
    }

    // Particles.js initialisieren
    function initParticles() {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.1,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.05,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.05,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.15
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    }

    // Three.js animierter Hintergrund
    function init3DBackground() {
        console.log('3D Background Feature deaktiviert');
        return; // Early return, um den Rest der Funktion nicht auszuführen
    }
    
    // Vanilla-Tilt für 3D-Karten-Kippeffekt initialisieren
    function initTilt() {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 15,
            speed: 300,
            glare: true,
            'max-glare': 0.2,
        });
    }
    
    // Sprache setzen und DOM aktualisieren
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        
        // Alle übersetzbaren Elemente aktualisieren
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Sprachbuttons optisch aktualisieren
        if (lang === 'de') {
            langDeBtn.classList.add('active');
            langEnBtn.classList.remove('active');
            if (footerLangDeBtn) footerLangDeBtn.classList.add('active');
            if (footerLangEnBtn) footerLangEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langDeBtn.classList.remove('active');
            if (footerLangEnBtn) footerLangEnBtn.classList.add('active');
            if (footerLangDeBtn) footerLangDeBtn.classList.remove('active');
        }
        
        // Speichere Spracheinstellung für nächsten Besuch
        localStorage.setItem('preferredLanguage', lang);
    }

    // Event-Listener für Sprachumschaltung
    langDeBtn.addEventListener('click', () => setLanguage('de'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    if (footerLangDeBtn) footerLangDeBtn.addEventListener('click', () => setLanguage('de'));
    if (footerLangEnBtn) footerLangEnBtn.addEventListener('click', () => setLanguage('en'));

    // Event-Listener für Login/Register
    loginBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        showModal(
            translations[currentLang].loginButton,
            translations[currentLang].loginMessage,
            true
        );
    });

    registerBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        showModal(
            translations[currentLang].registerButton,
            translations[currentLang].registerMessage
        );
    });

    // Event-Listener für Hero-CTA und andere Buttons
    if (heroCta) {
        heroCta.addEventListener('click', () => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    if (heroSecondaryCta) {
        heroSecondaryCta.addEventListener('click', () => {
            // Hier würde später eine Demo-Funktion implementiert werden
            alert('Demo-Funktion wird noch implementiert!');
        });
    }
    
    // Footer Newsletter-Formular
    const footerForm = document.querySelector('.footer-form');
    if (footerForm) {
        footerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = footerForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Danke für deine Anmeldung mit ${emailInput.value}!`);
                emailInput.value = '';
            }
        });
    }

    // FAQ Toggle-Funktion
    function initFAQ() {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                
                // Toggle aktive Klasse
                question.classList.toggle('active');
                
                if (question.classList.contains('active')) {
                    gsap.to(answer, {
                        height: 'auto',
                        duration: 0.3,
                        onStart: () => {
                            answer.style.display = 'block';
                        }
                    });
                } else {
                    gsap.to(answer, {
                        height: 0,
                        duration: 0.3,
                        onComplete: () => {
                            answer.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    // Mobile Navigation
    function initMobileNav() {
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('active');
                navLeft.classList.toggle('active');
                navMenu.classList.toggle('active');
                navRight.classList.toggle('active');
            });
        }
        
        // Aktiver Navigationspunkt beim Scrollen
        window.addEventListener('scroll', () => {
            let currentSection = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Funktion, um ein Popup zu zeigen (für Login/Register)
    function showModal(title, message, isLogin = false) {
        // Entferne bestehende Modals
        const existingModal = document.querySelector('.modal-container');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Erstelle neues Modal
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content glass-card';
        
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        
        const modalTitle = document.createElement('h3');
        modalTitle.textContent = title;
        
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'modal-close';
        closeButton.addEventListener('click', () => modalContainer.remove());
        
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);
        
        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.innerHTML = message;
        
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        
        if (isLogin) {
            const form = document.createElement('form');
            form.className = 'login-form';
            
            const emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.placeholder = 'Email';
            emailInput.value = 'team.vocabo.ai@gmail.com';
            
            const passwordInput = document.createElement('input');
            passwordInput.type = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.value = '12345678';
            
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.textContent = translations[document.documentElement.lang].loginButton;
            submitButton.className = 'login-button';
            
            form.appendChild(emailInput);
            form.appendChild(passwordInput);
            form.appendChild(submitButton);
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = emailInput.value;
                const password = passwordInput.value;
                
                if (email === 'team.vocabo.ai@gmail.com' && password === '12345678') {
                    modalBody.innerHTML = `<p class="success-message">${translations[document.documentElement.lang].loginSuccess}</p>`;
                    setTimeout(() => {
                        // Hier würde später die Weiterleitung zum Dashboard erfolgen
                        modalContainer.remove();
                        // window.location.href = 'dashboard.html';
                    }, 2000);
                } else {
                    const errorMessage = document.createElement('p');
                    errorMessage.className = 'error-message';
                    errorMessage.textContent = 'Invalid email or password!';
                    
                    const existingError = form.querySelector('.error-message');
                    if (existingError) {
                        form.removeChild(existingError);
                    }
                    
                    form.prepend(errorMessage);
                }
            });
            
            modalContent.appendChild(form);
        }
        
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);
        
        // Füge CSS für das Modal hinzu, falls es noch nicht existiert
        if (!document.querySelector('#modal-styles')) {
            const modalStyles = document.createElement('style');
            modalStyles.id = 'modal-styles';
            modalStyles.textContent = `
                .modal-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                    animation: fadeIn 0.3s ease;
                }
                
                .modal-content {
                    width: 90%;
                    max-width: 500px;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(15px);
                    padding: 2rem;
                    border-radius: 15px;
                    animation: slideIn 0.3s ease;
                }
                
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .modal-header h3 {
                    margin: 0;
                    color: #fff;
                    font-size: 1.5rem;
                }
                
                .modal-close {
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 1.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .modal-close:hover {
                    transform: scale(1.1);
                }
                
                .modal-body {
                    color: #fff;
                    margin-bottom: 1.5rem;
                }
                
                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .login-form input {
                    padding: 0.8rem 1rem;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                    font-size: 1rem;
                }
                
                .login-form input::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                
                .login-button {
                    background: linear-gradient(to right, #6C63FF, #FF6584);
                    color: #fff;
                    border: none;
                    padding: 0.8rem;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .login-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
                }
                
                .error-message {
                    color: #ff6b6b;
                    margin: 0 0 1rem;
                    font-size: 0.9rem;
                }
                
                .success-message {
                    color: #4CAF50;
                    text-align: center;
                    font-weight: 500;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `;
            document.head.appendChild(modalStyles);
        }
    }

    // Für zukünftige API-Integration (Gemini)
    const GEMINI_API_KEY = 'AIzaSyD77JZ7BI13x09C_imuhEUdOXwaRkWkv8s';

    // API-Placeholder-Funktion für zukünftige Implementierung
    function fetchGeminiContent(prompt, callback) {
        // Diese Funktion würde die tatsächliche API-Anfrage handhaben
        console.log('Gemini API would be called with prompt:', prompt);
        console.log('Using API key:', GEMINI_API_KEY);
        
        // Placeholder: Später mit echtem API-Aufruf ersetzen
        setTimeout(() => {
            callback({
                success: true,
                data: 'Hier würden die von der Gemini API generierten Inhalte erscheinen.'
            });
        }, 1000);
    }

    // Initialisierung der Website
    function initialize() {
        // Setze die Sprache basierend auf localStorage oder standardmäßig auf Deutsch
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'de';
        setLanguage(preferredLanguage);
        
        // Initialisiere FAQ-Funktionalität
        initFAQ();
        
        // Initialisiere Mobile Navigation
        initMobileNav();
        
        // Floating Words initialisieren
        createFloatingWords();
    }

    // Starte die Initialisierung
    initialize();
}); 