import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesList } from './pages/ServicesList';
import { ServiceDetail } from './pages/ServiceDetail';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { BackToTop } from './components/BackToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesList />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </div>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
