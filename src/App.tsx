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
      <header className="header">
        <div className="header-div">
          <p className="font-bold">Where in the world?</p>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="min-h-screen w-full pt-16">
        <form action="/search" method='get' className='max-w-screen-xl flex justify-between mx-5'>
          <input type="search" name='q' placeholder='Search for a country..' />
          <select name="region-filter" id="region-select">
                <option value="">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
          </select>
        </form>
      </div>
    </main>
  </ThemeProvider>
);

}

export default App;
