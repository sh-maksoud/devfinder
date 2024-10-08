import { useState, useEffect } from 'react';
import IconMoon from '../VectorIcons/IconMoon';
import IconSun from '../VectorIcons/IconSun';
import './ThemeToggler.css';

function ThemeToggler() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('devfinder-theme') || 'light');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  function applyThemeToPage() {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  function saveThemeSettings(theme) {
    setCurrentTheme(theme);
    localStorage.setItem('devfinder-theme', theme);
  }

  useEffect(() => {
    applyThemeToPage();
  }, [currentTheme]);

  return (
    <label className="theme-toggler" onClick={() => saveThemeSettings(nextTheme)}>
      <span className="switch-to">{nextTheme}</span>
      {nextTheme === 'dark' ? <IconMoon /> : <IconSun />}
    </label>
  );
}

export default ThemeToggler; 
