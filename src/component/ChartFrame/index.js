import React from 'react'

const ChartFrame = ({ children, cssClasses }) => {
  const viewBoxDims = [0, 0, 600, 300]
  const chartSize = { w: 600, h: 300 } // TODO get chart size from state

  return (
    <svg
      className={cssClasses.classes.chartFrame}
      viewBox={viewBoxDims}
    >
      <g>
        <rect
          fill="green"
          width={chartSize.w}
          height={chartSize.h}
        />
        {children}
      </g>
    </svg>
  )
}

export default ChartFrame
