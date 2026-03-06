function Services() {
    const services = [
        { 
            icon: 'icon-layout', 
            title: 'Landing Pages', 
            desc: 'High-converting, visually stunning landing pages designed to capture leads and drive sales instantly.' 
        },
        { 
            icon: 'icon-phone-call', 
            title: 'AI Calling Agents', 
            desc: 'Automated voice AI that handles customer support, sales calls, and appointment setting 24/7.' 
        },
        { 
            icon: 'icon-target', 
            title: 'Meta Ads', 
            desc: 'Data-driven ad campaigns on Facebook & Instagram that scale your revenue with precision targeting.' 
        },
        { 
            icon: 'icon-code', 
            title: 'Website Development', 
            desc: 'Full-stack custom websites built with React and Node.js for scalable, high-performance digital infrastructure.' 
        },
        { 
            icon: 'icon-palette', 
            title: 'UI/UX Designing', 
            desc: 'User-centric interfaces that blend aesthetics with functionality for an intuitive digital experience.' 
        }
    ];

    const handleServiceClick = () => {
        window.location.href = 'services.html';
    };

    return (
        <section id="services" className="section-snap py-32 relative bg-[var(--bg-dark)] overflow-hidden" data-name="services" data-file="components/Services.js">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20" data-aos="fade-up">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Core <span className="text-[var(--text-secondary)] opacity-60">Capabilities</span></h2>
                        <p className="text-xl text-[var(--text-secondary)] font-light">We engineer digital solutions that act as force multipliers for your business growth.</p>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <a href="services.html" className="btn-water inline-flex items-center gap-2">
                            Explore All <div className="icon-arrow-right w-4 h-4"></div>
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            onClick={handleServiceClick}
                            className={`cursor-pointer group ${index >= 3 ? 'md:col-span-1.5' : ''}`} // Simple layout adjust
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="watery-card p-8 h-full flex flex-col justify-between min-h-[350px] hover:bg-white/10 transition-colors">
                                <div>
                                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                        <div className={`${service.icon} text-2xl`}></div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-3 font-['Syncopate'] group-hover:text-[var(--water-accent)] transition-colors">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-light">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                                    Details <div className="icon-arrow-right ml-2 w-3 h-3"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
