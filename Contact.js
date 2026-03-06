function Contact() {
    return (
        <section id="contact" className="section-snap py-32 relative overflow-hidden" data-name="contact" data-file="components/Contact.js">
            <div className="container mx-auto px-6 relative z-10">
                <div 
                    className="max-w-5xl mx-auto glass-panel rounded-[2rem] p-8 md:p-16 border border-white/5 shadow-2xl"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Construct Your <span className="text-[var(--water-accent)] opacity-80">Empire</span></h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto font-light">The future belongs to those who build it. Start your journey with Nexora today.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('mailto:agentsnexora@gmail.com')}>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                        <div className="icon-mail text-2xl"></div>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email Us</div>
                                        <div className="text-lg font-bold">agentsnexora@gmail.com</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/nexoragents/?hl=en" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 border border-white/10 group">
                                    <div className="icon-instagram text-xl"></div>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61587889923720" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 border border-white/10 group">
                                    <div className="icon-facebook text-xl"></div>
                                </a>
                                <a href="https://www.youtube.com/@AgentsNexora" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 border border-white/10 group">
                                    <div className="icon-youtube text-xl"></div>
                                </a>
                            </div>

                            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                                <h4 className="font-bold mb-3 text-xl">Project Inquiry</h4>
                                <p className="text-sm text-gray-400 mb-6 font-light">We respond to all valid inquiries within 24 hours. Fill out the form to get started.</p>
                            </div>
                        </div>

                        <form className="space-y-6" action="https://formspree.io/f/mreadrad" method="POST">
                            {/* Redirect to Thank You Page */}
                            <input type="hidden" name="_next" value="thankyou.html" />
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Name</label>
                                <input type="text" name="name" placeholder="John Doe" required className="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                                <input type="email" name="email" placeholder="john@example.com" required className="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Service</label>
                                <select name="service" className="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 text-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all">
                                    <option value="General">Select Option</option>
                                    <option value="Landing Page">Landing Page Design</option>
                                    <option value="AI Agents">AI Calling Agents</option>
                                    <option value="Meta Ads">Meta Ads</option>
                                    <option value="Full Development">Full Development</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
                                <textarea name="message" rows="3" placeholder="Tell us about your project..." className="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all"></textarea>
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="block w-full text-center btn-water">
                                    <span className="flex items-center justify-center gap-3">
                                        Send Message <div className="icon-arrow-up-right w-4 h-4"></div>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
