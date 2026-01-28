
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from "./assets/css/styles";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import ResumePage from './pages/Resume';

export default function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}