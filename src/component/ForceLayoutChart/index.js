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
  { text: 'abc' },
  { text: 'def' },
  { text: 'ghi' },
  { text: 'jkl' },
]
// let count = 0
// function ticked() {
//   // on tick
//   // actions.updateNodes(nodes)
//   // dispatch({actionTypes.UPDATE_NODES, nodes })
//   if (count % 100 === 0) {
//     console.log('t', count, nodes)
//   }
//   // nodes = ...[state.iconNodes]
//   count += 1
// }
// const nodes = ...[state.iconNodes]
// const simulation = forceSimulation(nodes)
//   .force('charge', forceManyBody())
//   .force('center', forceCenter(width / 2, height / 2))
//   .on('tick', ticked)
// console.log(simulation)
function ForceLayoutChart() {
  const { state: stateC } = useContext(StoreContext)
  console.log('sss', stateC.iconNodes.nodes)
  const [count, setCount] = useState(0)
  const latestCount = useRef(count)

  // const elRef = React.createRef()
  const elRef = React.useRef(null)
  // let cancelT
  // start on load
  // function tick() {
  //   console.log('tick', count)
  //   //   // latestCount.current = count
  //   cancelT = setInterval(() => {
  //     setCount(latestCount.current + 1)
  //     elRef.current.innerHTML = new Date().getSeconds()
  //     // elRef.current.innerHTML = new Date()
  //     console.log('xxx', count, elRef)
  //   }, 1000)
  //   setTimeout(() => clearInterval(cancelT), 12000)
  // }
  function ticked() {
    console.log(nodes[0])
    console.log(elRef)
    elRef.current.style.top = `${nodes[0].x}px`
    elRef.current.style.left = `${nodes[0].y}px`
  }
  useEffect(() => {
    latestCount.current = count
    // Read the mutable latest value
    console.log(`You clicked ${latestCount.current} times`)
    // const latestCount = useRef(count);
    // tick()
    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody())
      .force('center', forceCenter(width / 2, height / 2))

    simulation.on('tick', () => ticked(elRef))

    console.log('elRef:', elRef)
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
              ssss
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
