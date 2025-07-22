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

    const htmlEL = document.documentElement;
    if (htmlEL){
      if(darkMode){
        htmlEL.classList.add("dark");
      }else{
        htmlEL.classList.remove("dark");
      }
    }
  }, [darkMode]);


  return (
  <ThemeProvider value={{ darkMode, toggleTheme: toogleDarkMode }}>
    <main className="App">
      <header className="fixed top-0 left-0 w-full bg-white h-16 z-50">
        <div className="max-w-screen-xl flex justify-between items-center h-full px-4">
          <p className="font-bold">Where in the world?</p>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="min-h-screen w-full pt-16">
        <h1 className="text-2xl text-purple dark:text-white">
          HELLO, WORLD
        </h1>
      </div>
    </main>
  </ThemeProvider>
);

}

export default App;
