function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] text-center px-6 relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary-cyan)]/10 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-2xl" data-aos="zoom-in">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-[var(--primary-cyan)] flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                    <div className="icon-check text-5xl text-[var(--primary-cyan)]"></div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Orbitron']">MESSAGE <br/><span className="text-[var(--primary-cyan)]">RECEIVED</span></h1>
                
                <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
                    We will connect with you in 24 Hours. Your digital empire awaits.
                </p>
                
                <a href="index.html" className="btn-primary inline-flex items-center gap-3">
                    <div className="icon-arrow-left"></div> Return to Base
                </a>
            </div>
        </div>
    );
}
