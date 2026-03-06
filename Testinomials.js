function Testimonials() {
    return (
        <section className="section-snap py-24 bg-[var(--bg-dark)]" data-name="testimonials" data-file="components/Testimonials.js">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-16" data-aos="fade-up">Client <span className="text-[var(--primary-cyan)]">Stories</span></h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item, index) => (
                        <div 
                            key={item} 
                            className="perspective-1000 group h-64 cursor-pointer"
                            data-aos="flip-left"
                            data-aos-delay={index * 150}
                        >
                            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                                {/* Front */}
                                <div className="absolute inset-0 backface-hidden glass-panel p-8 rounded-2xl flex flex-col items-center justify-center border-t border-white/10">
                                    <div className="w-16 h-16 rounded-full bg-gray-700 mb-4 overflow-hidden border border-[var(--primary-cyan)]">
                                        <img src={`https://randomuser.me/api/portraits/men/${item + 20}.jpg`} alt="User" className="w-full h-full object-cover"/>
                                    </div>
                                    <h3 className="text-xl font-bold font-['Orbitron']">Tech Innovators</h3>
                                    <div className="flex gap-1 text-[var(--primary-cyan)] mt-2">
                                        {[...Array(5)].map((_, i) => <div key={i} className="icon-star w-4 h-4 fill-current"></div>)}
                                    </div>
                                    <p className="text-sm text-gray-400 mt-4">Hover to reveal review</p>
                                </div>
                                
                                {/* Back */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel p-8 rounded-2xl flex items-center justify-center bg-[var(--secondary-purple)]/20 border border-[var(--secondary-purple)]">
                                    <p className="text-white italic">"Nexora transformed our digital presence completely. The 3D elements are stunning and user engagement has doubled."</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
