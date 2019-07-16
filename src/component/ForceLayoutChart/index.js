import React, { useEffect, useContext } from 'react'
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'
import getStyle, { styleTypes } from '../../get-style'

let nodes = []
function ForceLayoutChart() {
  const { state: stateInner } = useContext(StoreContext)
  const gRef = React.useRef(null)
  function ticked() {
    for (let i = 0; i < nodes.length; i += 1) {
      gRef.current.children[i].style.transform = `translate(${nodes[i].x}px, ${nodes[i].y}px)`
    }
  }
  useEffect(() => {
    nodes = [...stateInner.iconNodes]
    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody())
      .force('center', forceCenter(150, 75))
    simulation.on('tick', () => ticked())
  }, [])
  const iconStyle = {
    fontSize: '30px',
    fill: getStyle(stateInner.theme, styleTypes.GENERIC).background(true),
    stroke: 'darkgray',
  }
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <ChartFrame>
            <g ref={gRef} className={getStyle(state.theme, styleTypes.GENERIC).main()}>
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
      }}
    </StoreContext.Consumer>

  )
}
export default ForceLayoutChart
