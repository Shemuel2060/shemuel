
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useThemeStyles } from './hooks/useThemeStyles';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import About from './pages/About';
import ResumePage from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Quotes from './pages/Quotes';
import Contact from './pages/Contact';

const AppContent = () => {
  const styles = useThemeStyles();

  return (
    <div style={styles.app}>
      <Navigation />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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