import ThemeSwitcher from './components/ThemeSwitcher';
import FetchCountry from './components/FetchCountry';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/theme'
import './App.css';
import './index.css';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true" ? true : false;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

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

      <div className="w-full pt-16">
        <form onSubmit={(e) => e.preventDefault()}
         action="/search" method='get' className='max-w-screen-xl flex justify-between mx-5'>
          <input type="search" 
          placeholder='Search for a country..'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
           />
            <select name="region-filter" 
            id="region-select"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            >
                <option value="">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
      </div>


      <div className='pt-8'>
        <FetchCountry searchQuery={searchQuery} region={regionFilter} darkMode={darkMode}></FetchCountry>
      </div>
      



    </main>
  </ThemeProvider>
);

}

export default App;
