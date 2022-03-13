import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => setDarkTheme(prev => !prev)

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}