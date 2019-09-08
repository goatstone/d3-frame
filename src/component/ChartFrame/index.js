import React from 'react'

const ChartFrame = ({ children, cssClasses }) => {
  const viewBoxDims = [0, 0, 600, 400] // TODO  get these values from state
  return (
    <svg
      className={cssClasses.classes.chartFrame}
      viewBox={viewBoxDims}
    >
      <rect fill="gray" width={viewBoxDims[2]} height={viewBoxDims[3]} />
      <g transform="translate(50 50)">
        <rect fill="green" width="250" height="300" />
        {children}
      </g>
    </svg>
  )
}

export default ChartFrame
