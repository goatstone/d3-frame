import React, { createContext, useState } from 'react'

const defaultTheme = { a: 1 }
const ThemeContext = createContext<any>(defaultTheme)
const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
