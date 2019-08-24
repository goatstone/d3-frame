import React, { useEffect, useContext, useState } from 'react'
import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceCollide,
} from 'd3-force'
import { StoreContext } from '../../StoreContext'
import 'material-icons/iconfont/material-icons.css'
import { ThemeContext } from '../../ThemeContext'

function ForceLayoutChart() {
  const { cssSheet } = useContext(ThemeContext)
  const centerX = parseInt(cssSheet.getRule('chartIconForce').prop('width'), 10) / 2
  let centerY = parseInt(cssSheet.getRule('chartIconForce').prop('height'), 10) / 2
  // offset
  centerY -= 10
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
      .force('center', forceCenter(centerX, centerY))
      .force('collision', forceCollide().radius(15))
    simulation.on('tick', () => tick())
  }, [])
  return (
    <React.Fragment>
      <svg
        className={cssSheet.classes.chartIconForce}
      >
        /** trigger the redraw */
        {localTrigger}
        <rect
          className={cssSheet.classes.chartIconForce}
        />
        <g>
          {iconNodes.map(n => {
            return (
              <text
                x={(n.x)}
                y={(n.y)}
                key={`${Math.random()}${n.name}`}
                className="material-icons"
              >
                {n.name}
              </text>
            )
          })}
        </g>
      </svg>
      <h3>Material Font Icons</h3>
    </React.Fragment>
  )
}
export default ForceLayoutChart
