function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8" data-name="footer" data-file="components/Footer.js">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--primary-cyan)] to-[var(--secondary-purple)] flex items-center justify-center">
                                <span className="text-black font-bold text-lg font-['Orbitron']">N</span>
                            </div>
                            <h2 className="text-3xl font-bold font-['Orbitron'] text-white text-glow">NEXORA</h2>
                        </div>
                        <p className="text-gray-500">Founder & CEO – Rudraksh Sharma</p>
                        <p className="text-gray-500">agentsnexora@gmail.com</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 justify-center md:justify-end">
                        <a href="index.html" className="text-gray-400 hover:text-[var(--primary-cyan)] transition-colors">Home</a>
                        <a href="services.html" className="text-gray-400 hover:text-[var(--primary-cyan)] transition-colors">Services</a>
                        <a href="portfolio.html" className="text-gray-400 hover:text-[var(--primary-cyan)] transition-colors">Work</a>
                        <a href="contact.html" className="text-gray-400 hover:text-[var(--primary-cyan)] transition-colors">Contact</a>
                    </div>
                </div>
                
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
                    <p>&copy; 2026 Nexora. All Rights Reserved.</p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <a href="privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="refund.html" className="hover:text-white transition-colors">Refund Policy</a>
                        <a href="disclaimer.html" className="hover:text-white transition-colors">Disclaimer</a>
                        <a href="faq.html" className="hover:text-white transition-colors">FAQ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
