import React, { useEffect, useContext } from 'react'
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'

let nodes = []
const iconStyle = {
  fontSize: '30px',
  fill: 'white',
  stroke: 'green',
}
function ForceLayoutChart() {
  const { state: stateInner } = useContext(StoreContext)
  const gRef = React.useRef(null)
  function ticked() {
    for (let i = 0; i < nodes.length; i += 1) {
      gRef.current.children[i].style.transform = `translate(${nodes[i].x}px, ${nodes[i].y}px)`
    }
  }
  useEffect(() => {
    nodes = [...stateInner.iconNodes.nodes]
    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody())
      .force('center', forceCenter(150, 75))
    simulation.on('tick', () => ticked())
  }, [])
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <ChartFrame>
            <g ref={gRef} className="icon-list">
              {state.iconNodes.nodes.map(n => {
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
      }}
    </StoreContext.Consumer>

  )
}
export default ForceLayoutChart
