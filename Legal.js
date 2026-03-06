function LegalLayout({ title, children }) {
    return (
        <div className="pt-32 pb-24 bg-[var(--bg-dark)] min-h-screen relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--secondary-purple)]/5 rounded-full blur-[100px]"></div>
             
             <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 border-b border-white/10 pb-8">{title}</h1>
                <div className="prose prose-invert prose-lg max-w-4xl opacity-80 font-light">
                    {children}
                </div>
            </div>
        </div>
    );
}

function Privacy() {
    return (
        <LegalLayout title="Privacy Policy">
            <p>Last updated: March 2026</p>
            <h3>1. Information We Collect</h3>
            <p>We collect information you provide directly to us when you fill out a contact form, including your name, email address, and project details.</p>
            <h3>2. How We Use Information</h3>
            <p>We use the information we collect to communicate with you, provide services, and improve our digital offerings.</p>
            <h3>3. Cookies</h3>
            <p>This site uses cookies to improve performance and user experience. By using our site, you consent to our use of cookies.</p>
        </LegalLayout>
    );
}

function Refund() {
    return (
        <LegalLayout title="Refund Policy">
            <h3>Service Cancellations</h3>
            <p>Due to the nature of digital services and development work, refunds are handled on a case-by-case basis as outlined in your specific service agreement.</p>
            <h3>Milestone Payments</h3>
            <p>Payments made for completed milestones are generally non-refundable once the work has been approved.</p>
        </LegalLayout>
    );
}

function Disclaimer() {
    return (
        <LegalLayout title="Disclaimer">
            <h3>No Guarantees</h3>
            <p>While Nexora strives to provide the best possible digital solutions, we cannot guarantee specific results, revenue increases, or market dominance.</p>
            <h3>External Links</h3>
            <p>Our website may contain links to external sites. We are not responsible for the content or privacy practices of these sites.</p>
        </LegalLayout>
    );
}

function FAQ() {
    const faqs = [
        { q: "What is your typical turnaround time?", a: "For standard landing pages, 1-2 weeks. Full custom development projects typically take 4-8 weeks." },
        { q: "Do you offer post-launch support?", a: "Yes, we offer various maintenance packages to ensure your digital empire remains secure and up-to-date." },
        { q: "How do the AI Agents work?", a: "Our AI agents are trained on your specific business data to handle calls and inquiries naturally, available 24/7." }
    ];

    return (
        <LegalLayout title="Frequently Asked Questions">
            <div className="space-y-8">
                {faqs.map((item, i) => (
                    <div key={i} className="glass-panel p-8 rounded-xl border-l-4 border-[var(--primary-cyan)]">
                        <h3 className="text-xl font-bold text-white mb-3">{item.q}</h3>
                        <p className="text-gray-400">{item.a}</p>
                    </div>
                ))}
            </div>
        </LegalLayout>
    );
}
