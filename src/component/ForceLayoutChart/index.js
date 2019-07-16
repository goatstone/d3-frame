import React, { useEffect, useContext } from 'react'
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
// import ChartFrame from '../ChartFrame'
import getStyle, { styleTypes } from '../../get-style'

let iconNodes = []
const iconMax = 100
function ForceLayoutChart() {
  const { state } = useContext(StoreContext)
  const svgGroupRef = React.useRef(null)
  const bounds = {
    top: -140,
    right: 900,
    bottom: 500,
    left: 0,
  }
  function ticked() {
    for (let i = 0; i < iconNodes.length; i += 1) {
      if (
        iconNodes[i].x < bounds.right
        && iconNodes[i].x > bounds.left
        && iconNodes[i].y < bounds.bottom
        && iconNodes[i].y > bounds.top
      ) {
        svgGroupRef.current.children[i].style.transform = `
        translate(${iconNodes[i].x}px, ${iconNodes[i].y}px)
        `
      }
    }
  }
  useEffect(() => {
    iconNodes = [...state.iconNodes.slice(0, iconMax)]
    const simulation = forceSimulation(iconNodes)
      .force('charge', forceManyBody().distanceMax(50))
      .force('center', forceCenter(250, 250))
    simulation.tick([1])
    simulation.on('tick', () => ticked())
  }, [])
  const iconStyle = {
    fontSize: '20px',
    fill: getStyle(state.theme, styleTypes.GENERIC).background(true),
    stroke: 'gray',
  }
  return (
    <svg
      className="main"
      width="500"
      height="500"
      data-component-type="container"
    >
      <rect
        fill="black"
        width="100%"
        height="500"
      />
      <g ref={svgGroupRef} className={getStyle(state.theme, styleTypes.GENERIC).main()}>
        {state.iconNodes.slice(0, iconMax).map(n => {
          return (
            <text
              x="0"
              y="0"
              style={iconStyle}
              className="material-icons"
            >
              {n.name}
            </text>
          )
        })}
      </g>
    </svg>
  )
}
export default ForceLayoutChart
