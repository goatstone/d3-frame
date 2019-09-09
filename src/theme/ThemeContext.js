import React, { createContext, useState, useEffect } from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import themeFactory, { menuOptions } from './theme-factory'

jss.setup(preset())

const ThemeContext = createContext({})
const themeNames = menuOptions
const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('gray')
  const sheet = jss.createStyleSheet(themeFactory(themeName))
  sheet.attach()
  const [cssSheet, setCssSheet] = useState(sheet)
  useEffect(() => {
    const newSheet = jss.createStyleSheet(themeFactory(themeName))
    newSheet.attach()
    setCssSheet(newSheet)
  }, [themeName])


  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, cssSheet }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, themeNames }
