function Portfolio() {
    // Real projects mapping based on user input
    const projects = [
        { 
            title: 'Gym App 2.0', 
            category: 'App Development', 
            url: 'https://gymapptwoapppreivewnexoraagents.oneapp.dev/',
            img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
            desc: 'Next-gen fitness tracking and management.'
        },
        { 
            title: 'Nexora Dentist', 
            category: 'Healthcare', 
            url: 'https://dntistnexoraappp.oneapp.dev/',
            img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
            desc: 'Modern booking system for dental clinics.'
        },
        { 
            title: 'Gym Agents', 
            category: 'AI Integration', 
            url: 'https://gymnexorapppagents.oneapp.dev/',
            img: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1974&auto=format&fit=crop',
            desc: 'AI-powered agents for gym membership sales.'
        },
        { 
            title: 'SocioMed App', 
            category: 'Social Media', 
            url: 'https://sociomedapppsss.oneapp.dev/',
            img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
            desc: 'Social connectivity for medical professionals.'
        },
        { 
            title: 'School Preview', 
            category: 'Education', 
            url: 'https://schoolpprev.oneapp.dev/',
            img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
            desc: 'Interactive school virtual tour platform.'
        }
    ];

    return (
        <section id="portfolio" className="section-snap py-24 bg-black relative" data-name="portfolio" data-file="components/Portfolio.js">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[var(--bg-dark)] to-transparent z-10"></div>
            
            <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end" data-aos="fade-up">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Featured <span className="text-[var(--primary-cyan)]">Work</span></h2>
                    <p className="text-[var(--text-gray)]">Witness the empires we've built.</p>
                </div>
                <div className="mt-6 md:mt-0">
                    <a href="portfolio.html" className="text-[var(--primary-cyan)] hover:text-white transition-colors flex items-center gap-2 group">
                        View All Projects <div className="icon-arrow-right group-hover:translate-x-1 transition-transform"></div>
                    </a>
                </div>
            </div>

            {/* Scrolling container */}
            <div className="flex overflow-x-auto pb-12 gap-8 px-6 no-scrollbar snap-x snap-mandatory" data-aos="fade-up" data-aos-delay="200">
                {projects.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.url}
                        target="_blank"
                        className="min-w-[85vw] md:min-w-[450px] snap-center group relative cursor-pointer"
                    >
                        <div className="watery-glass h-[500px] rounded-2xl overflow-hidden relative">
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                                <div className="text-[var(--primary-cyan)] text-sm font-bold uppercase tracking-wider mb-2">{project.category}</div>
                                <h3 className="text-3xl font-bold text-white mb-2 font-['Orbitron']">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-[var(--primary-cyan)] transition-colors">
                                    Visit Live Site <div className="icon-external-link w-4 h-4"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
