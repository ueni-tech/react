import { useState, useContext } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return {
    < ThemeContext.Provider value = { [theme, setTheme]} >
    { children }
    </ThemeContext.Provider >
  }
}

const useTheme = () => useContext(ThemeContext);