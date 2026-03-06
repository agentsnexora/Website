function ServicePage() {
    return (
        <div className="pt-32 pb-24 bg-[var(--bg-dark)] min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24" data-aos="fade-down" data-aos-duration="1200">
                    <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">OUR <span className="opacity-50">SERVICES</span></h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">Architecting the digital infrastructure for next-generation businesses.</p>
                </div>

                <div className="space-y-32">
                    {/* Landing Page Section */}
                    <div className="flex flex-col md:flex-row gap-16 items-center" data-aos="fade-up">
                        <div className="w-full md:w-1/2">
                            <div className="watery-card p-12 aspect-square flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="icon-layout text-9xl opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-bold mb-2">98%</div>
                                        <div className="text-sm uppercase tracking-widest text-gray-400">Conversion Focus</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6 font-['Syncopate']">Landing Page Design</h2>
                            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                                We craft visually arresting landing pages that don't just look good—they convert. Using psychology-driven layouts and lightning-fast code, we turn visitors into revenue.
                            </p>
                            <a href="contact.html" className="btn-water inline-block">Start Project</a>
                        </div>
                    </div>

                    {/* AI Agents Section */}
                    <div className="flex flex-col md:flex-row-reverse gap-16 items-center" data-aos="fade-up">
                        <div className="w-full md:w-1/2">
                             <div className="watery-card p-12 aspect-square flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="icon-cpu text-9xl opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-bold mb-2">24/7</div>
                                        <div className="text-sm uppercase tracking-widest text-gray-400">Autonomous Operation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6 font-['Syncopate']">AI Calling Agents</h2>
                            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                                Replace your call center with intelligent, human-like AI voice agents. They handle inbound support, outbound sales, and scheduling without taking a break.
                            </p>
                            <a href="contact.html" className="btn-water inline-block">Deploy Agents</a>
                        </div>
                    </div>

                    {/* Meta Ads Section */}
                    <div className="flex flex-col md:flex-row gap-16 items-start" data-aos="fade-up">
                        <div className="w-full md:w-1/2">
                             <h2 className="text-4xl font-bold mb-6 font-['Syncopate']">Meta Ads & Viral Creative</h2>
                            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                                We don't just run ads; we create culture. Our viral creative strategies on Instagram and Facebook stop the scroll and drive massive ROI.
                            </p>
                            <a href="contact.html" className="btn-water inline-block">Scale Now</a>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-center">Recent Success</h3>
                            <div className="flex flex-col items-center gap-8">
                                <div className="w-full flex justify-center watery-card p-4">
                                     <blockquote 
                                        className="instagram-media" 
                                        data-instgrm-permalink="https://www.instagram.com/reel/DVgkId3EvY3/" 
                                        data-instgrm-version="14" 
                                        style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%', width:'-webkit-calc(100% - 2px)', width:'calc(100% - 2px)' }}
                                    ></blockquote>
                                </div>
                                <div className="w-full flex justify-center watery-card p-4">
                                    <blockquote 
                                        className="instagram-media" 
                                        data-instgrm-permalink="https://www.instagram.com/reel/DVgF8JVEiCb/" 
                                        data-instgrm-version="14" 
                                        style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%', width:'-webkit-calc(100% - 2px)', width:'calc(100% - 2px)' }}
                                    ></blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Website Development Section */}
                    <div className="flex flex-col md:flex-row-reverse gap-16 items-center" data-aos="fade-up">
                        <div className="w-full md:w-1/2">
                             <div className="watery-card p-12 aspect-square flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="icon-code text-9xl opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-bold mb-2">100%</div>
                                        <div className="text-sm uppercase tracking-widest text-gray-400">Custom Code</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6 font-['Syncopate']">Website Development</h2>
                            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                                From e-commerce platforms to complex web applications, we build robust, scalable, and secure digital infrastructure tailored to your business needs using the latest tech stacks.
                            </p>
                            <a href="contact.html" className="btn-water inline-block">Build It</a>
                        </div>
                    </div>

                     {/* UI/UX Design Section */}
                     <div className="flex flex-col md:flex-row gap-16 items-center" data-aos="fade-up">
                        <div className="w-full md:w-1/2">
                            <div className="watery-card p-12 aspect-square flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="icon-palette text-9xl opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-bold mb-2">UI/UX</div>
                                        <div className="text-sm uppercase tracking-widest text-gray-400">Intuitive Design</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6 font-['Syncopate']">UI/UX Designing</h2>
                            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                                We create intuitive, user-centric designs that blend aesthetics with functionality. Every pixel is placed with purpose to guide your users towards conversion.
                            </p>
                            <a href="contact.html" className="btn-water inline-block">Start Design</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
