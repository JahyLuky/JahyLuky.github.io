import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { TerminalLayout } from './components/terminal/TerminalLayout';
import { Navigation } from './components/navigation/Navigation';
import { SkipToContent } from './components/layout/SkipToContent';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <SkipToContent />
      <TerminalLayout>
        <Navigation />
        <AppRoutes />
      </TerminalLayout>
    </HashRouter>
  );
}

export default App;
