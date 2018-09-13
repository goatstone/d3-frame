import React from 'react'

const ChartFrame = ({
    children,
    width,
    height,
    dataId,
    dataComponentType,
    background,
    margin,
    containerWidth,
}) => {
    const chartLeft = margin[3]
    const chartTop = margin[0]
    return (<svg
        width={containerWidth}
        height={height}
        data-id={dataId}
        data-component-type={dataComponentType}
    >
        <rect
            fill={background}
            width="100%"
            height={height}
        />
        <g style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}>
            {children}
        </g>
            </svg>)
}

export default ChartFrame
