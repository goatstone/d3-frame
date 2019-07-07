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
      bottom: 0,
      left: 0,
      display: 'flex',
      fontSize: '1rem',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '1px',
      margin: '3px',
      background: backgroundColor,
      borderRadius: '0.5rem',
      '& label': {
        color: foregroundColor,
        display: 'inline-block',
        border: '1px solid #999',
        borderRadius: '6px',
        padding: '3px',
        margin: '3px',
      },
      '& button, select': {
        color: foregroundColor,
        fontSize: '1rem',
        padding: '6px',
        margin: '6px',
        fontWeight: 900,
      },
    },
  },
}
function updateStyle(theme, styleTypeB) {
  /* eslint indent: "off" */
  switch (theme) {
    case 'RED':
      style[styleTypeB].main.background = 'red'
      break
    case 'GRAY':
      style[styleTypeB].main.background = 'gray'
      break
    case 'GREEN':
      style[styleTypeB].main.background = 'green'
      break
    case 'BLUE':
      style[styleTypeB].main.background = 'blue'
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
  const background = () => {
    const sheet = jss.createStyleSheet({
      main: {
        background: selectedStyle.main.background,
      },
    }).attach()
    return sheet.classes.main
  }
  return {
    main,
    background,
  }
}

export default getStyle
