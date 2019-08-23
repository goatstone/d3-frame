import React, { createContext, useState, useEffect } from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import themeFactory, { menuOptions } from './theme-factory'

jss.setup(preset())

const ThemeContext = createContext({})
const themeNames = menuOptions
const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('redStyle')
  // const [themeName, setThemeName] =
  // useState(themeNames.filter(tN => tN.keyValue === 'grayStyle'))
  // let sheet = jss.createStyleSheet(themeFactory(sheetName))
  // sheet.attach()
  // const [cssSheet, setCssSheet] = useState(sheet)
  useEffect(() => {
    const newSheet = jss.createStyleSheet(themeFactory(menuOptions))
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
