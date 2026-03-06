function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: 'index.html' },
        { name: 'About', href: 'about.html' },
        { name: 'Services', href: 'services.html' },
        { name: 'Portfolio', href: 'portfolio.html' },
        { name: 'Contact', href: 'contact.html' },
    ];

    const isActive = (href) => {
        const path = window.location.pathname;
        if (href === 'index.html' && (path === '/' || path.endsWith('index.html'))) return true;
        return path.includes(href);
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div 
                    className="cursor-pointer group flex items-center gap-3"
                    onClick={() => window.location.href = 'index.html'}
                >
                    <div className="w-10 h-10 border border-white flex items-center justify-center rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-500">
                         <span className="font-['Syncopate'] font-bold text-lg">N</span>
                    </div>
                    <span className="font-['Syncopate'] font-bold text-xl tracking-widest">NEXORA</span>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-white ${
                                isActive(link.href) ? 'text-white border-b border-white pb-1' : 'text-gray-500'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    <a 
                        href="contact.html"
                        className="btn-water py-3 px-6 text-[10px]"
                    >
                        Start Project
                    </a>
                </nav>

                <button 
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className={mobileMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-8 animate-fade-in">
                    <button 
                        className="absolute top-6 right-6 text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="icon-x text-3xl"></div>
                    </button>
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-['Syncopate'] font-bold text-white hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
