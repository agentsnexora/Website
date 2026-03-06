function PortfolioPage() {
    // Reusing the same project data source for consistency
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
        <div className="pt-24 pb-12 bg-[var(--bg-dark)] min-h-screen">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Full <span className="text-[var(--secondary-purple)]">Portfolio</span></h1>
                    <p className="text-xl text-gray-400">A collection of our digital masterpieces.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                         <a 
                            key={index} 
                            href={project.url}
                            target="_blank"
                            className="group block"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="watery-glass rounded-2xl overflow-hidden relative aspect-video">
                                <img 
                                    src={project.img} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="px-6 py-3 border border-[var(--primary-cyan)] text-[var(--primary-cyan)] font-bold uppercase tracking-wider hover:bg-[var(--primary-cyan)] hover:text-black transition-colors">
                                        View Live Project
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-2xl font-bold font-['Orbitron']">{project.title}</h3>
                                    <span className="text-xs font-bold uppercase text-[var(--primary-cyan)] border border-[var(--primary-cyan)] px-2 py-1 rounded">{project.category}</span>
                                </div>
                                <p className="text-gray-400">{project.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
