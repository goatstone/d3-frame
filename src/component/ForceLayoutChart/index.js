import React, {
  useEffect,
  useContext,
} from 'react'
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'

const iconStyle = {
  fill: 'red',
  stroke: 'white',
  transform: 'translate(30px, 130px) scale(3)',
}

let nodes = []
function ForceLayoutChart() {
  const { state: stateInner } = useContext(StoreContext)
  const elRef = React.useRef(null)
  function ticked() {
    for (let i = 0; i < nodes.length; i += 1) {
      elRef.current.childNodes[i].style.top = `${nodes[i].x}px`
      elRef.current.childNodes[i].style.left = `${nodes[i].y}px`
    }
  }
  useEffect(() => {
    nodes = [...stateInner.iconNodes.nodes]
    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody())
      .force('center', forceCenter(100, 100))
    simulation.on('tick', () => ticked(elRef))
  }, [])
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <div>
            <div
              ref={elRef}
            >
              {state.iconNodes.nodes.map(n => (
                <div style={{ position: 'absolute' }}>{n.name}</div>
              ))}
            </div>
            <ChartFrame>
              {state.iconNodes.nodes.map(n => {
                return (
                  <text
                    x={10}
                    y={10}
                  >
                    {n.name}
                  </text>
                )
              })
              }
              <text
                className="material-icons"
                style={iconStyle}
              >
                face
              </text>
              <text style={{ transform: 'translate(5px, 5px)' }} stroke="red" fill="red">
                {state.chartType}
              </text>
            </ChartFrame>
          </div>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default ForceLayoutChart
