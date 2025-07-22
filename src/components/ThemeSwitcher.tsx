import useTheme from '../context/theme'


const ThemeSwitcher = () => {
    const { darkMode, toggleTheme: toogleDarkMode } = useTheme();

  return (
    <>
        <div>
            <button>
                <span className="text-xs " onClick={toogleDarkMode}>
                    {darkMode ? '🌑 Dark Mode' : '☀️ Light Mode'}
                </span>
            </button>
        </div>
    </>
  ) 
}

export default ThemeSwitcher