import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Mail, Phone, Linkedin, Github, ArrowRight, Activity, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const container = useRef();
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2
      });

      // About Section
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Experience Cards
      gsap.utils.toArray('.exp-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          x: i % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Skills Animation
      gsap.utils.toArray('.skill-card').forEach((card) => {
        const fill = card.querySelector('.skill-fill');
        const percentage = card.dataset.percentage;
        gsap.to(fill, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          strokeDasharray: `${percentage}, 100`,
          duration: 1.5,
          ease: 'power2.inOut'
        });
      });

      // Formation & Contact
      gsap.from('.fade-up-element', {
        scrollTrigger: {
          trigger: '.fade-up-container',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      });

    }, container);
    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      period: '2023 - Présent',
      role: 'Créateur de Solutions Digitales',
      company: 'Business en Ligne',
      desc: "Lancement d'activités de marketing digital et création de solutions sur mesure."
    },
    {
      period: '2022 - 2023',
      role: 'Analyste de Données',
      company: 'Projets Personnels & Académiques',
      desc: 'Analyse approfondie de jeux de données, développement de modèles et data viz.'
    },
    {
      period: '2021 - 2022',
      role: 'Informaticien de Gestion',
      company: 'Stage de Licence',
      desc: 'Gestion des ressources informatiques et intégration de systèmes de données.'
    }
  ];

  const skills = [
    { name: 'Data Analysis', percent: 90 },
    { name: 'Intelligence Artificielle', percent: 85 },
    { name: 'Informatique de Gestion', percent: 95 },
    { name: 'Marketing Digital', percent: 80 },
    { name: 'Dev Solutions Web', percent: 75 }
  ];

  return (
    <div ref={container} className="bg-primary text-textLight min-h-screen relative selection:bg-accent selection:text-white">
      {/* Noise Texture SVG Filter */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      <div className="noise-overlay" style={{ filter: 'url(#noiseFilter)' }}></div>

      {/* Navbar */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 rounded-[3rem] px-6 py-3 flex items-center gap-8 ${navScrolled ? 'bg-background/60 backdrop-blur-xl border border-white/10 shadow-lg' : 'bg-transparent'}`}>
        <span className="font-bold text-xl tracking-tight">MA.</span>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="link-hover text-white/70 hover:text-white">À propos</a>
          <a href="#experience" className="link-hover text-white/70 hover:text-white">Expérience</a>
          <a href="#skills" className="link-hover text-white/70 hover:text-white">Compétences</a>
        </div>
        <a href="#contact" className="btn-magnetic bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors">
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center relative px-6 md:px-20 overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract Neon Dark Texture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/95 to-primary"></div>
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full pt-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="hero-element relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/50 p-1">
                <div className="w-full h-full bg-white/5 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/50">MA</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="hero-element text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Mahamadou <br/> Alakoum
              </h1>
              <h2 className="hero-element font-dramatic text-3xl md:text-5xl text-accent mb-8">
                Informaticien et Data Analyst
              </h2>
              
              <div className="hero-element flex flex-wrap justify-center md:justify-start items-center gap-4 font-data text-sm text-white/60 mb-10">
                <span className="flex items-center gap-2"><Activity size={16} /> Data & IA</span>
                <span className="text-accent/50">|</span>
                <span className="flex items-center gap-2"><MapPin size={16} /> Bamako</span>
                <span className="text-accent/50">|</span>
                <span>Projets Digitaux</span>
              </div>

              <div className="hero-element flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a download href="#" className="btn-magnetic bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(123,97,255,0.4)]">
                  Télécharger CV <Download size={18} />
                </a>
                <a href="#contact" className="btn-magnetic border border-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors">
                  Me contacter <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-20 bg-white/5">
        <div className="max-w-6xl mx-auto about-section flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="font-dramatic text-5xl md:text-6xl text-white about-content">Le Manifeste Personnel</h2>
          </div>
          <div className="md:w-2/3 flex gap-8 about-content">
            <div className="w-[2px] bg-accent/50 rounded-full shrink-0"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Titulaire d'une Licence en Gestion des ressources humaines et informatique de gestion, je suis profondément passionné par la data et l'intelligence artificielle. Ma vision est de lancer ma propre entreprise en tant que marketteur digital et créateur de solutions digitales. J'allie analyse technique et stratégie business pour transformer les données en opportunités de croissance, tout en cultivant mon esprit d'équipe à travers le football et ma curiosité par la lecture.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-20 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-dramatic text-5xl md:text-6xl text-center mb-24">La Timeline Vivante</h2>
          
          <div className="relative">
            {/* Center Line Desktop */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent/30 md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div key={idx} className={`exp-card relative flex flex-col md:flex-row gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(123,97,255,0.8)] z-10"></div>
                  
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="card-hover bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                      <span className="font-data text-accent text-sm mb-4 block">{exp.period}</span>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <h4 className="text-white/60 mb-4">{exp.company}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-dramatic text-5xl md:text-6xl text-center mb-20">Le Tableau de Bord</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} data-percentage={skill.percent} className="skill-card card-hover bg-primary p-8 rounded-[2rem] border border-white/10 flex items-center justify-between group">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <span className="font-data text-accent/80 text-sm">{skill.percent}% Maîtrise</span>
                </div>
                <div className="w-16 h-16 relative">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="3"
                    />
                    <path
                      className="skill-fill transition-all duration-1000 ease-out"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="3"
                      strokeDasharray="0, 100"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-32 px-6 md:px-20 relative fade-up-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-dramatic text-5xl md:text-6xl text-center mb-16 fade-up-element">Les Fondations : Mes Projets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover bg-white/5 p-10 rounded-[3rem] border border-white/10 fade-up-element text-left">
              <span className="font-data text-accent mb-4 block text-lg">Gestion & Logiciel</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Application d'Inventaire</h3>
              <p className="text-white/60 mb-6 leading-relaxed">Création d'une application complète de gestion d'inventaire permettant le suivi en temps réel des stocks, l'optimisation des ressources et la génération de rapports.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-data bg-white/10 px-3 py-1 rounded-full text-white/80">Dev Web</span>
                <span className="text-xs font-data bg-white/10 px-3 py-1 rounded-full text-white/80">Gestion</span>
              </div>
            </div>

            <div className="card-hover bg-white/5 p-10 rounded-[3rem] border border-white/10 fade-up-element text-left">
              <span className="font-data text-accent mb-4 block text-lg">Data & IA</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Détection des Anomalies de Vote</h3>
              <p className="text-white/60 mb-6 leading-relaxed">Développement d'une application intelligente analysant les données électorales pour détecter les fraudes et anomalies lors des processus de vote.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-data bg-white/10 px-3 py-1 rounded-full text-white/80">Data Analysis</span>
                <span className="text-xs font-data bg-white/10 px-3 py-1 rounded-full text-white/80">Intelligence Artificielle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-20 relative bg-accent text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -right-[10%] w-full h-full bg-white/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center fade-up-container">
          <h2 className="font-dramatic text-5xl md:text-7xl mb-12 fade-up-element">Le Pont vers l'Avenir</h2>
          <p className="text-xl mb-12 text-white/90 fade-up-element">Prêt à construire des solutions digitales et analyser vos données ?</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16 fade-up-element">
            <a href="mailto:contact@example.com" className="btn-magnetic w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20">
              <Mail size={24} />
            </a>
            <a href="#" className="btn-magnetic w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20">
              <Phone size={24} />
            </a>
            <a href="#" className="btn-magnetic w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20">
              <Linkedin size={24} />
            </a>
            <a href="#" className="btn-magnetic w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20">
              <Github size={24} />
            </a>
          </div>

          <a href="mailto:contact@example.com" className="btn-magnetic inline-flex bg-primary text-white px-10 py-5 rounded-full text-lg font-bold items-center gap-3 fade-up-element shadow-2xl">
            Lancer une discussion <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-20 pb-10 px-6 rounded-t-[4rem] relative -mt-10 z-20 border-t border-white/5 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-bold text-lg">Mahamadou Alakoum</p>
          <p className="text-white/40 text-sm">Fait avec le vibe coding © {new Date().getFullYear()}</p>
          <div className="flex items-center gap-2 font-data text-xs mt-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>En ligne - Prêt pour de nouveaux défis</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
