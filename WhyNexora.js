function WhyNexora() {
    const features = [
        { title: 'Strategic Brand Positioning', desc: 'We place you exactly where your audience is looking.' },
        { title: 'High Conversion Design', desc: 'Beauty that sells. Designs optimized for ROI.' },
        { title: 'Lightning Fast Performance', desc: 'Speed matters. We optimize for 100/100 Core Web Vitals.' },
        { title: 'SEO Optimized Framework', desc: 'Built-in visibility from line one of code.' },
        { title: 'Long-Term Growth Strategy', desc: 'We build for the future, not just for today.' },
    ];

    const [scrollProgress, setScrollProgress] = React.useState(0);
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const totalHeight = rect.height;
                
                // Calculate progress based on how much of the section is visible/scrolled past
                let progress = (windowHeight - rect.top) / (windowHeight + totalHeight);
                
                // Clamp progress between 0 and 1
                progress = Math.max(0, Math.min(1, progress));
                
                // Adjust scale factor for better visual fill
                setScrollProgress(progress * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="section-snap py-24 relative overflow-hidden" data-name="why-nexora" data-file="components/WhyNexora.js">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(165,243,252,0.05),transparent_50%)]"></div>
            
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="zoom-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why <span className="text-[var(--water-accent)]">Nexora?</span></h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Background Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10"></div>
                    
                    {/* Animated Fill Line */}
                    <div 
                        className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-[var(--water-accent)] to-white/50 transition-all duration-100 ease-out"
                        style={{ height: `${scrollProgress}%` }}
                    ></div>

                    <div className="space-y-12 pb-12">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                                data-aos-offset="100"
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[var(--bg-dark)] z-10 mt-1 md:mt-0 transition-colors duration-500 ${scrollProgress > ((index + 1) / features.length) * 100 ? 'bg-[var(--water-accent)] shadow-[0_0_10px_var(--water-accent)]' : 'bg-gray-800'}`}></div>
                                
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 text-left">
                                    <div className={`glass-panel p-6 rounded-xl hover:border-[var(--water-accent)] transition-colors duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-xl font-bold mb-2 text-white font-['Orbitron']">{feature.title}</h3>
                                        <p className="text-[var(--text-gray)]">{feature.desc}</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
