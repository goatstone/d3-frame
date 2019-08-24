import React from 'react'

const ChartFrame = ({ children, cssClasses }) => {
  const padding = parseInt(
    cssClasses.getRule('chartFrame').prop('padding'),
    10,
  )
  console.log('a', padding)
  return (
    <svg className={cssClasses.classes.chartFrame}>
      <rect className={cssClasses.classes.chartFrame} />
      <g transform={`translate(${padding}, ${padding})`}>
        {children}
      </g>
    </svg>
  )
}

export default ChartFrame
