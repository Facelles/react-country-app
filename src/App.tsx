import ThemeSwitcher from './components/ThemeSwitcher';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/theme'
import './App.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true" ? true : false;
  });

  const toogleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEL = document.body;
    if (bodyEL){
      if(darkMode){
        bodyEL.classList.add("dark");
      }else{
        bodyEL.classList.remove("dark");
      }
    }
  }, [darkMode]);


  return (
    <ThemeProvider value={{ darkMode, toggleTheme: toogleDarkMode }}>
      <div className="App">
        <ThemeSwitcher />
        <h1 className="text-2xl">Current Theme: {darkMode ? 'Dark' : 'Light'}</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
