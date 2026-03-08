
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import WhatsAppFAB from './components/WhatsAppFAB';
import Home from './pages/Home';
import About from './pages/About';
import ResumePage from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Quotes from './pages/Quotes';
import Contact from './pages/Contact';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 relative text-gray-900 dark:text-gray-100">
      <Navigation />
      <ThemeToggle />
      <WhatsAppFAB />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}