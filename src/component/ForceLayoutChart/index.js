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
  const iconNodes = state.iconNodes.slice(0, 120)
  const [localTrigger, setLocalTrigger] = useState(0)
  function tick() {
    /** trigger the redraw */
    setLocalTrigger(Math.random())
  }
  useEffect(() => {
    setLocalTrigger(localTrigger + 1)
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
        {localTrigger}
        <rect
          fill="white"
          width="500"
          height="500"
        />
        <g className={getStyle(state.theme, styleTypes.GENERIC).main()}>
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
