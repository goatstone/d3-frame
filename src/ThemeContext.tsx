import React, { createContext, useState } from 'react'

const ThemeContext = createContext<any>({})
const themeNames = {
  GRAY: 'GRAY',
  RED: 'RED',
  BLUE: 'BLUE',
  GREEN: 'GREEN',
}
const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState(themeNames.GRAY)

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, themeNames }
