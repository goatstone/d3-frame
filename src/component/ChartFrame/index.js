import React from 'react'

const ChartFrame = ({
  children,
  height,
  background,
  margin,
  containerWidth,
  chartId,
}) => {
  const chartLeft = margin[3]
  const chartTop = margin[0]
  return (
    <svg
      className="main"
      width={containerWidth}
      height={height}
      data-component-type="container"
      data-chart-id={chartId}
    >
      <rect
        fill={background}
        width="100%"
        height={height}
      />
      <g style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}>
        {children}
      </g>
    </svg>
  )
}

export default ChartFrame
