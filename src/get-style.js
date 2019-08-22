import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const backgroundColor = '#777'
const foregroundColor = '#111'
const styleTypes = { GENERIC: 'GENERIC', CONTROL: 'CONTROL' }
export { styleTypes }
const style = {
  [styleTypes.GENERIC]: {
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100%',
      padding: '10px',
      margin: '1px',
      background: backgroundColor,
      color: '#eee',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
      '& a': {
        color: 'darkblue',
        textDecoration: 'none',
      },
      '& hr': {
        color: '#aaa',
      },
    },
  },
  [styleTypes.CONTROL]: {
    main: {
      position: 'fixed',
      bottom: '10px',
      left: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontSize: '1rem',
      padding: '1px',
      margin: '3px',
      borderRadius: '0.5rem',
      '& label': {
        color: foregroundColor,
        fontWeight: 900,
        background: 'gray',
        opacity: 0.9,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        border: '1px solid #999',
        padding: '1px 6px',
        margin: '0 3px',
      },
      '& button, select': {
        color: foregroundColor,
        fontSize: '1rem',
        padding: '6px',
        margin: '6px',
        fontWeight: 900,
      },
      '& button': {
        background: '#ccc',
        borderColor: 'black',
        cursor: 'pointer',
      },
      '& button:disabled': {
        cursor: 'default',
        background: 'white',
      },
      '& h1': {
        margin: '3px',
      },
      '& h1 a': {
        color: 'black',
        fontSize: '1em',
        margin: '3px',
      },
    },
  },
}
function updateStyle(theme, styleType) {
  /* eslint indent: "off" */
  switch (theme) {
    case 'RED':
      style[styleType].main.background = 'red'
      style[styleType].main.color = 'orange'
      break
    case 'GRAY':
      style[styleType].main.background = 'gray'
      style[styleType].main.color = 'lightgray'
      break
    case 'GREEN':
      style[styleType].main.background = 'green'
      style[styleType].main.color = 'lightgreen'
      break
    case 'BLUE':
      style[styleType].main.background = 'blue'
      style[styleType].main.color = 'lightblue'
      break
    default:
      throw new Error('Theme does not exist')
  }
}
function getStyle(theme, styleType) {
  if (!style[styleType]) {
    throw new Error(`${styleType} : style type does not exist`)
  }
  const selectedStyle = style[styleType]
  if (styleType !== styleTypes.CONTROL) {
    updateStyle(theme, styleType)
  }
  const main = () => {
    const sheet = jss.createStyleSheet(selectedStyle).attach()
    return sheet.classes.main
  }
  // if value param return only value an not style sheet name
  const background = (valueOnly) => {
    if (valueOnly) return selectedStyle.main.background
    const sheet = jss.createStyleSheet({
      main: {
        background: selectedStyle.main.background,
      },
    }).attach()
    return sheet.classes.main
  }
  const foreground = (valueOnly) => {
    if (valueOnly) return selectedStyle.main.color
    const sheet = jss.createStyleSheet({
      main: {
        color: selectedStyle.main.color,
      },
    }).attach()
    return sheet.classes.main
  }
  return {
    main,
    background,
    foreground,
  }
}

export default getStyle
