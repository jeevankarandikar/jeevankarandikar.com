import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import Projects from './components/Projects';
import Favorites from './components/Favorites';
import Travels from './components/Travels';

const lightTheme = {
  bg: '#feeeee',
  text: '#333',
  linkHoverBg: '#333',
  linkHoverColor: '#fff'
};

const darkTheme = {
  bg: '#1a1a1a',
  text: '#fff',
  linkHoverBg: '#fff',
  linkHoverColor: '#1a1a1a'
};

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.bg};
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  z-index: 100;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(128, 128, 128, 0.2);
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 4rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(128, 128, 128, 0.2);
    }
  }

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    background: ${props => props.theme.bg};
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router>
        <Container>
          <Nav>
            <HamburgerButton onClick={toggleMenu}>
              <svg viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </HamburgerButton>
            <NavLinks isOpen={isMenuOpen}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>home</Link>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)}>projects</Link>
              <Link to="/favorites" onClick={() => setIsMenuOpen(false)}>favorites</Link>
              <Link to="/travels" onClick={() => setIsMenuOpen(false)}>travels</Link>
            </NavLinks>
          </Nav>
          <ThemeToggle onClick={toggleTheme}>
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </ThemeToggle>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/travels" element={<Travels />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App; 