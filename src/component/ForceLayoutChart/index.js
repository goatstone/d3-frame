import React, { useEffect, useContext, useState } from 'react'
import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceCollide,
} from 'd3-force'
import { StoreContext } from '../../StoreContext'
import 'material-icons/iconfont/material-icons.css'
import { ThemeContext } from '../../theme/ThemeContext'
import ChartFrame from '../ChartFrame'

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
      <ChartFrame
        cssClasses={cssSheet}
      >
        /** trigger the redraw */
        {localTrigger}
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
        <text className={cssSheet.classes.chartText}>
          Material Font Icons
        </text>
      </ChartFrame>
    </React.Fragment>
  )
}
export default ForceLayoutChart
