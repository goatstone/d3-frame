import React, { useContext, useEffect, useState } from 'react'
import { hierarchy, treemap } from 'd3'
import { StoreContext } from '../../StoreContext'
import getStyle, { styleTypes } from '../../get-style'
import data from './data'

let displaydata = [{
  x0: 0, x1: 0, y0: 33, y1: 33, data: { name: 'xx' },
}]
function ForceLayoutChart() {
  const { state } = useContext(StoreContext)
  const [localState, setLocalState] = useState(0)
  useEffect(() => {
    const root = hierarchy(data)
      .sum(d1 => d1.value)
      .sort((a, b) => b.value - a.value)
    const treemapNodes = treemap()
      .size([500, 500])
      .round(true)(root)
    displaydata = root.leaves()
    // const abc = nest().key(d => d.height).entries(root.descendants())
    displaydata.forEach(d => {
      console.log(d)
      console.log(d.parent)
      console.log(d.children)
      Object.entries(d).forEach(dd => {
        // console.log('    p    ', dd.parent)
        console.log('        ', dd)
      })
    })
    // console.log(displaydata)
    // console.log(root.children)
    // console.log(root.leaves())
    console.log(treemapNodes)
    setLocalState(1)
  }, [])
  return (
    <div>
      {localState}
      <svg
        className={getStyle(state.theme, styleTypes.GENERIC).main()}
        width="500"
        height="500"
        viewBox="[0, 0, 500, 500]"
      >
        <rect
          fill="white"
          width="500"
          height="500"
        />
        {displaydata.map((d, i) => (
          <g transform={`translate(${d.x0 * 3},${i * 60 + 20})`}>
            <text x="30" y="0">
              {d.x0}
              :::de
              {d.parent && d.parent.depth}
              :
              {d.parent && d.parent.x0}
              :
              {d.parent && d.parent.x1}
              :
              {d.parent && d.parent.y0}
              :
              {d.parent && d.parent.y1}
              :H
              {d.parent && d.parent.height}
              {d.parent && d.parent.data.name}
              {/* {d.parent && Object.entries(d.parent).map(() => <i>X</i>)} */}
              HGHT
              {d.height}
              #
              {d.data.name}
              ::::
              {/* {d.parent.map(e => (
                <div>
                  e
                  {e}
                </div>
              ))} */}
              {d.depth}
            </text>
            <rect
              // fill="transparent"
              fill="red"
              stoke="red"
              strokeSize="3"
              x={d.x0}
              y={d.y0}
              width={10}
              height={10}
            // width={() => d.x1 - d.x0}
            // height={() => d.y1 - d.y0}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
export default ForceLayoutChart
