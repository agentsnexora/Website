function Hero() {
    React.useEffect(() => {
        anime({
            targets: '.hero-text',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 2000,
            delay: anime.stagger(200)
        });
    }, []);

    return (
        <section className="section-snap relative min-h-screen flex items-center justify-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#111,black)]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-700"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="hero-text opacity-0 mb-6 inline-block">
                    <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Next Gen Digital Agency</span>
                    </div>
                </div>
                
                <h1 className="hero-text opacity-0 text-5xl md:text-8xl font-bold leading-tight mb-8 tracking-tighter">
                    BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">DIGITAL</span><br />
                    <span className="italic font-serif font-light text-6xl md:text-9xl">Empires</span>
                </h1>
                
                <p className="hero-text opacity-0 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    We craft high-converting landing pages, deploy intelligent AI agents, and engineer viral ad campaigns that dominate markets.
                </p>
                
                <div className="hero-text opacity-0 flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a href="contact.html" className="btn-water min-w-[200px] text-center">
                        Start Project
                    </a>
                    <a href="portfolio.html" className="text-sm uppercase tracking-widest hover:text-white text-gray-500 transition-colors border-b border-transparent hover:border-white pb-1">
                        View Our Work
                    </a>
                </div>
            </div>
            
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
}
