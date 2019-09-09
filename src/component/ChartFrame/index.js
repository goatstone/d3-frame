import React from 'react'

const ChartFrame = ({ children, cssClasses }) => {
  const viewBoxDims = [0, 0, 600, 300]

  return (
    <svg
      className={cssClasses.classes.chartFrame}
      viewBox={viewBoxDims}
    >
      <g>
        {children}
      </g>
    </svg>
  )
}

export default ChartFrame
