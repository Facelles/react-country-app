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
      <main className="App ">
        <header className='absolute top-0 left-0 w-screen bg-white h-17'>
          <div className='max-w-screen-xl mx-auto grid grid-cols-2 flex justify-between items-center h-full'>
            <p className='font-bold'>Where in the world?</p>
            <ThemeSwitcher/>
          </div>
        </header>

        <body className='dark:bg-black min-h-screen m-0 p-0'>
          <h1>
            sSFDk
          </h1>
        </body>
      </main>
    </ThemeProvider>
  );
}

export default App;
