import { useTheme, useThemeUpdate } from './ThemeContext'

const FunctionContextComponent = () => {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      Funtion
    </div>
  )
}

export default FunctionContextComponent