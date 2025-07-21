import useTheme from '../context/theme'


const ThemeSwitcher = () => {
    const { darkMode, toggleTheme: toogleDarkMode } = useTheme();

  return (
    <>
        <div>
            <button>
                <span className="text-2xl mt-2" onClick={toogleDarkMode}>
                    {darkMode ? '🌙' : '☀️'}
                </span>
            </button>
        </div>
    </>
  )
}

export default ThemeSwitcher