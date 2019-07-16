import React, { useEffect, useContext } from 'react'
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'
import getStyle, { styleTypes } from '../../get-style'

let iconNodes = []
function ForceLayoutChart() {
  const { state } = useContext(StoreContext)
  const svgGroupRef = React.useRef(null)
  const bounds = {
    top: -20,
    right: 600,
    bottom: 250,
    left: -40,
  }
  function ticked() {
    for (let i = 0; i < iconNodes.length; i += 1) {
      if (
        iconNodes[i].x < bounds.right
        && iconNodes[i].x > bounds.left
        && iconNodes[i].y < bounds.bottom
        && iconNodes[i].y > bounds.top
      ) {
        svgGroupRef.current.children[i].style.transform = `translate(${iconNodes[i].x}px, ${iconNodes[i].y}px)`
      }
    }
  }
  useEffect(() => {
    iconNodes = [...state.iconNodes]
    const simulation = forceSimulation(iconNodes)
      .force('charge', forceManyBody())
      .force('center', forceCenter(0, 75))
    simulation.on('tick', () => ticked())
  }, [])
  const iconStyle = {
    fontSize: '30px',
    fill: getStyle(state.theme, styleTypes.GENERIC).background(true),
    stroke: 'darkgray',
  }
  return (
    <ChartFrame>
      <g ref={svgGroupRef} className={getStyle(state.theme, styleTypes.GENERIC).main()}>
        {state.iconNodes.map(n => {
          return (
            <text
              style={iconStyle}
              className="material-icons"
            >
              {n.name}
            </text>
          )
        })}
      </g>
    </ChartFrame>
  )
}
export default ForceLayoutChart
