import React, { useEffect, useContext, useState } from 'react'
import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceCollide,
} from 'd3-force'
import { StoreContext } from '../../StoreContext'
import getStyle, { styleTypes } from '../../get-style'

function ForceLayoutChart() {
  const { state } = useContext(StoreContext)
  const iconNodes = state.iconNodes.slice(0, 100)
  const [iNState, setINState] = useState([{ name: 'aaa' }])
  const svgGroupRef = React.useRef(null)
  function tick() {
    /** trigger the redraw */
    setINState([{ name: `${iconNodes[0].x}px` }])
  }
  useEffect(() => {
    setINState([{ name: '22222' }])
    const simulation = forceSimulation(iconNodes)
    simulation
      .force('charge', forceManyBody().strength(10))
      .force('center', forceCenter(225, 250))
      .force('collision', forceCollide().radius(15))
    simulation.on('tick', () => tick())
  }, [])
  const iconStyle = {
    fontSize: '25px',
    fill: getStyle(state.theme, styleTypes.GENERIC).background(true),
    stroke: 'gray',
  }
  return (
    <div>
      <svg
        className="main"
        width="500"
        height="500"
      >
        /** trigger the redraw */
        {iNState[0].name}
        <rect
          fill="white"
          width="500"
          height="500"
        />
        <g ref={svgGroupRef} className={getStyle(state.theme, styleTypes.GENERIC).main()}>
          {iconNodes.map(n => {
            return (
              <text
                x={(n.x)}
                y={(n.y)}
                key={`${Math.random()}${n.name}`}
                style={iconStyle}
                className="material-icons"
              >
                {n.name}
              </text>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
export default ForceLayoutChart
