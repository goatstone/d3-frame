function getColors(theme) {
  const color = {
    foreground: 'lightgray',
    background: 'black',
  }
  if (theme === 'RED') {
    color.foreground = 'red'
    color.background = 'darkred'
  } else if (theme === 'GREEN') {
    color.foreground = 'green'
    color.background = 'darkgreen'
  } else if (theme === 'BLUE') {
    color.foreground = 'blue'
    color.background = 'darkblue'
  } else if (theme === 'GRAY') {
    color.foreground = 'lightgray'
    color.background = 'black'
  } else {
    throw new Error('No Color Theme found')
  }
  function background() {
    return color.background
  }
  function foreground() {
    return color.foreground
  }
  return {
    background,
    foreground,
  }
}
export default getColors
