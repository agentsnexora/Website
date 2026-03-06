function About() {
    return (
        <section id="about" className="section-snap py-24 relative bg-[var(--bg-dark)] overflow-hidden" data-name="about" data-file="components/About.js">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left: 3D Agency Card */}
                    <div className="w-full md:w-1/2 perspective-1000" data-aos="fade-right">
                        <div className="relative group hover:transform hover:rotate-x-2 transition-transform duration-500 preserve-3d">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-cyan)] to-[var(--secondary-purple)] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative glass-panel p-8 rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end">
                                <img 
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                                    alt="Office" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="relative z-10 p-2">
                                    <h3 className="text-3xl font-bold mb-2 font-['Orbitron']">Futuristic Vision</h3>
                                    <p className="text-gray-300">We don't follow trends. We create them.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 space-y-8" data-aos="fade-left">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="text-[var(--primary-cyan)]">Who</span> We Are
                        </h2>
                        <p className="text-[var(--text-gray)] text-lg leading-relaxed">
                            Nexora is a modern digital agency founded by <span className="text-white font-bold">Rudraksh Sharma</span>. 
                            We specialize in high-end website development, custom AI agent integration, branding strategy, and performance-focused Meta ads.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="glass-panel p-6 rounded-xl border-l-4 border-[var(--primary-cyan)]">
                                <div className="text-3xl font-bold text-white mb-1">50+</div>
                                <div className="text-sm text-[var(--text-gray)]">Projects Completed</div>
                            </div>
                            <div className="glass-panel p-6 rounded-xl border-l-4 border-[var(--secondary-purple)]">
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-[var(--text-gray)]">Client Satisfaction</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                                <div className="icon-user text-[var(--primary-cyan)]"></div>
                            </div>
                            <div>
                                <div className="font-bold text-white">Rudraksh Sharma</div>
                                <div className="text-sm text-[var(--primary-cyan)]">Founder & CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
