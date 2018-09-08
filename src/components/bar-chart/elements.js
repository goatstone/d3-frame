import React from 'react'

const elements = elementData => elementData
      .map((d) => {
          return (
                  <g
              key={`x${d.label}`}
                  >
                  <rect
              key={`xx${d.y}`}
              x={d.x}
              y={d.y}
              width={d.w}
              height={d.h}
                  />
                  <text
              key={`xxx${d.x}`}
              x={d.x}
              y={d.y + d.h + 20}
                  >{d.label}
                  </text>
                  <text
              key={`xxxx${d.frequency}`}
              x={d.x}
              y={d.y + d.h + 35}
                  >
                  {d.frequency}
              </text>
                  </g>
          )
      })
export default elements
