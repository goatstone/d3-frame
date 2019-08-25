import React from 'react'

const ChartFrame = ({ children, cssClasses }) => {
  const padding = parseInt(
    cssClasses.getRule('chartFrame').prop('padding'),
    10,
  )
  const viewBoxVal = `-${padding} -${padding} 600 360 `
  return (
    <svg
      className={cssClasses.classes.chartFrame}
      viewBox={viewBoxVal}
    >
      {/* target size 650 x 300 */}
      <rect width="650" height="300" />
      <g>
        {children}
      </g>
    </svg>
  )
}

export default ChartFrame
