import React, {
  useEffect,
  useState,
  useContext,
  useRef,
} from 'react'
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'

const iconStyle = {
  fill: 'red',
  stroke: 'white',
  transform: 'translate(30px, 130px) scale(3)',
}
const width = 300
const height = 300
const nodes = [
  { text: 'A' },
  { text: 'B' },
  { text: 'C' },
  { text: 'D' },
]
function ForceLayoutChart() {
  const { state: stateC } = useContext(StoreContext)
  console.log('state', stateC.iconNodes.nodes)
  const [count, setCount] = useState(0)
  const latestCount = useRef(count)

  // const elRef = React.createRef()
  const elRef = React.useRef(null)
  function ticked() {
    for (let i = 0; i < nodes.length; i += 1) {
      elRef.current.childNodes[i].innerHTML = `${nodes[i].text}`
      elRef.current.childNodes[i].style.top = `${nodes[i].x}px`
      elRef.current.childNodes[i].style.left = `${nodes[i].y}px`
    }
  }
  useEffect(() => {
    latestCount.current = count
    // Read the mutable latest value
    console.log(`You clicked ${latestCount.current} times`)
    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody())
      .force('center', forceCenter(width / 2, height / 2))

    simulation.on('tick', () => ticked(elRef))

    elRef.current.style.background = 'green'
    elRef.current.style.position = 'absolute'
    elRef.current.style.top = '20px'
  }, [])
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <div>
            <p>
              You clicked
              {count}
              time
            </p>
            <button
              type="button"
              onClick={() => setCount(count + 1)}
            >
              Click me
            </button>
            <div
              ref={elRef}
            >
              <div style={{ position: 'absolute' }}>a</div>
              <div style={{ position: 'absolute' }}>b</div>
              <div style={{ position: 'absolute' }}>c</div>
              <div style={{ position: 'absolute' }}>d</div>
            </div>
            {count}
            <ChartFrame>
              {state.iconNodes.nodes.map(n => {
                return (
                  <text
                    x={n.position[0]}
                    y={n.position[1]}
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
