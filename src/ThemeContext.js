import React, { createContext, useState, useEffect } from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import themeFactory, { menuOptions } from './theme-factory'

jss.setup(preset())

const ThemeContext = createContext({})
const themeNames = {
  GRAY: 'GRAY',
  RED: 'RED',
  BLUE: 'BLUE',
  GREEN: 'GREEN',
}
const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(themeNames.GRAY)
  console.log(menuOptions)
  // let sheet = jss.createStyleSheet(themeFactory(sheetName))
  // sheet.attach()
  // const [cssSheet, setCssSheet] = useState(sheet)
  useEffect(() => {
    const newSheet = jss.createStyleSheet(themeFactory(themeName))
    console.log(newSheet)
    //   newSheet.attach()
    // setTheme(newSheet)
  }, [themeName])


  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, themeNames }
