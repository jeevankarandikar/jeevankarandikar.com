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
`;

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router>
        <Container>
          <Nav>
            <NavLinks>
              <Link to="/">home</Link>
              <Link to="/projects">projects</Link>
              <Link to="/favorites">favorites</Link>
              <Link to="/travels">travels</Link>
            </NavLinks>
          </Nav>
          
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            )}
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