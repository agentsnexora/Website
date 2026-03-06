function CookieConsent() {
    const [visible, setVisible] = React.useState(false);
    const [showPreferences, setShowPreferences] = React.useState(false);
    const [preferences, setPreferences] = React.useState({
        essential: true,
        analytics: true,
        marketing: false
    });

    React.useEffect(() => {
        const consent = localStorage.getItem('nexora-cookie-consent');
        if (!consent) {
            setTimeout(() => setVisible(true), 1500);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('nexora-cookie-consent', 'true');
        setVisible(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('nexora-cookie-consent', 'custom');
        localStorage.setItem('nexora-cookie-prefs', JSON.stringify(preferences));
        setVisible(false);
    };

    if (!visible) return null;

    if (showPreferences) {
         return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
                <div className="glass-panel w-full max-w-lg p-8 rounded-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold font-['Syncopate']">Cookie Preferences</h3>
                        <button onClick={() => setShowPreferences(false)} className="text-gray-400 hover:text-white"><div className="icon-x text-2xl"></div></button>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                            <div>
                                <div className="font-bold text-white">Essential</div>
                                <div className="text-xs text-gray-400">Required for the empire to function.</div>
                            </div>
                            <div className="icon-check text-[var(--water-accent)] text-xl"></div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                            <div>
                                <div className="font-bold text-white">Analytics</div>
                                <div className="text-xs text-gray-400">Helps us optimize our digital architecture.</div>
                            </div>
                            <button 
                                onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                                className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${preferences.analytics ? 'bg-[var(--water-accent)]' : 'bg-gray-700'}`}
                            >
                                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-black transition-transform duration-300 ${preferences.analytics ? 'translate-x-6' : ''}`}></div>
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                            <div>
                                <div className="font-bold text-white">Marketing</div>
                                <div className="text-xs text-gray-400">Personalized ad targeting.</div>
                            </div>
                             <button 
                                onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                                className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${preferences.marketing ? 'bg-[var(--water-accent)]' : 'bg-gray-700'}`}
                            >
                                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-black transition-transform duration-300 ${preferences.marketing ? 'translate-x-6' : ''}`}></div>
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4">
                         <button 
                            onClick={handleSavePreferences}
                            className="btn-water flex-1 text-center"
                        >
                            Save Preferences
                        </button>
                        <button 
                            onClick={handleAcceptAll}
                            className="btn-primary flex-1 text-center bg-[var(--water-accent)] text-black hover:bg-white"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center animate-fade-in-up">
            <div className="bg-[rgba(5,5,5,0.95)] backdrop-blur-xl border border-[var(--water-accent)]/30 rounded-2xl shadow-[0_0_30px_rgba(165,243,252,0.1)] p-6 md:flex items-center gap-8 max-w-5xl w-full justify-between">
                <div className="flex items-center gap-4 mb-4 md:mb-0 max-w-2xl">
                    <div className="icon-shield-check text-3xl text-[var(--water-accent)] animate-pulse-glow flex-shrink-0"></div>
                    <div>
                        <h4 className="font-bold text-white mb-1">Privacy Protocols</h4>
                        <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                            We use advanced tracking to optimize your experience. Control your data flow or accept full transmission.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 whitespace-nowrap">
                    <button 
                        onClick={() => setShowPreferences(true)}
                        className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors px-4 py-2"
                    >
                        Configure
                    </button>
                     <button 
                        onClick={handleAcceptAll}
                        className="btn-primary py-2 px-8 text-xs bg-[var(--water-accent)] text-black hover:bg-white"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}
