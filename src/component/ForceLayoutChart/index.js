import React, { useEffect, useState } from 'react'
// import { forceSimulation, forceManyBody, forceCenter } from 'd3-force'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'

const iconStyle = {
  fill: 'red',
  stroke: 'white',
  transform: 'translate(30px, 130px) scale(3)',
}
// const width = 300
// const height = 300
// const nodes = [
//   { text: 'abc' },
//   { text: 'def' },
//   { text: 'ghi' },
//   { text: 'jkl' },
// ]
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
  // const { state: stateC, actions } = useContext(StoreContext)
  const [count, setCount] = useState(0)
  useEffect((eff) => {
    console.log('effect', eff)
    console.log('effect', count, setCount)
    return () => {
      setCount(count + 1)
      // actions.setIsDrawn(true)
    }
  })

  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <div>
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
