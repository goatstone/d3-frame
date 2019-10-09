import React from 'react'

const ChartFrame = ({ children, cssClasses }) => {
  const viewBoxDims = [0, 0, 600, 300]
  const scaleOffset = (window.chrome) ? 2 : 1 // eslint-disable-line no-undef
  return (
    <svg
      className={cssClasses.classes.chartFrame}
      viewBox={viewBoxDims}
      transform={`scale(${scaleOffset})`}
    >
      <g>
        {children}
      </g>
    </svg>
  )
}

export default ChartFrame
