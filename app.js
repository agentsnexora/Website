// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-[var(--primary-cyan)]">System Malfunction</h1>
            <p className="text-gray-400 mb-4">The digital empire encountered a glitch.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    React.useEffect(() => {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-out-cubic',
                mirror: false,
                offset: 50
            });
        }
    }, []);

    const path = window.location.pathname;
    let PageContent;

    // Routing Logic
    if (path.includes('services.html')) {
        PageContent = <ServicePage />;
    } else if (path.includes('portfolio.html')) {
        PageContent = <PortfolioPage />;
    } else if (path.includes('about.html')) {
        PageContent = (
            <main>
                <div className="pt-24"><About /></div>
                <WhyNexora />
                <Testimonials />
            </main>
        );
    } else if (path.includes('contact.html')) {
        PageContent = (
            <main className="pt-12">
                <Contact />
            </main>
        );
    } else if (path.includes('thankyou.html')) {
        PageContent = <ThankYou />;
    } else if (path.includes('privacy.html')) {
        PageContent = <Privacy />;
    } else if (path.includes('refund.html')) {
        PageContent = <Refund />;
    } else if (path.includes('disclaimer.html')) {
        PageContent = <Disclaimer />;
    } else if (path.includes('faq.html')) {
        PageContent = <FAQ />;
    } else {
        // Index / Home
        PageContent = (
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <WhyNexora />
                <Testimonials />
                <Contact />
            </main>
        );
    }

    // Hide Header/Footer on Thank You page for immersive effect
    const isThankYou = path.includes('thankyou.html');

    return (
      <div className="font-sans antialiased text-white selection:bg-[var(--primary-cyan)] selection:text-black">
        {!isThankYou && <Header />}
        {PageContent}
        {!isThankYou && <Footer />}
        <CookieConsent />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
