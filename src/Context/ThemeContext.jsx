// import React, { createContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light'); 

//   function toggleTheme() {
//     setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//   }

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('devfinder-theme');
//     if (storedTheme) {
//       setTheme(storedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('devfinder-theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export { ThemeProvider, ThemeContext };








import React, { createContext, useState, useEffect } from 'react';

// Create the ThemeContext with a default value
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Initialize the theme from local storage or default to 'light'
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('devfinder-theme') || 'light');

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('devfinder-theme', newTheme);
  };

  // Apply the theme to the document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Provide the theme and toggle function to children
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};






