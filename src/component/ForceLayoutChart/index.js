import React, { useEffect, useContext } from 'react'
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'
import getStyle, { styleTypes } from '../../get-style'

let iconNodes = []
function ForceLayoutChart() {
  const { state } = useContext(StoreContext)
  const svgGroupRef = React.useRef(null)
  function ticked() {
    for (let i = 0; i < iconNodes.length; i += 1) {
      svgGroupRef.current.children[i].style.transform = `translate(${iconNodes[i].x}px, ${iconNodes[i].y}px)`
    }
  }
  useEffect(() => {
    iconNodes = [...state.iconNodes]
    const simulation = forceSimulation(iconNodes)
      .force('charge', forceManyBody())
      .force('center', forceCenter(150, 75))
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
