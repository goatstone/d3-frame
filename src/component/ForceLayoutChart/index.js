import React, { useEffect, useContext } from 'react'
import {
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceCollide,
} from 'd3-force'
import { StoreContext } from '../../StoreContext'
import getStyle, { styleTypes } from '../../get-style'

let iconNodes = []
const iconMax = Math.floor(50 * Math.random()) + 100
function ForceLayoutChart() {
  const { state } = useContext(StoreContext)
  const svgGroupRef = React.useRef(null)
  const bounds = {
    top: 30,
    right: 410,
    bottom: 540,
    left: 0,
  }
  function ticked() {
    for (let i = 0; i < iconNodes.length; i += 1) {
      if (
        iconNodes[i].x < bounds.right
        && iconNodes[i].x > bounds.left
        && iconNodes[i].y < bounds.bottom
        && iconNodes[i].y > bounds.top
        && svgGroupRef.current
      ) {
        // this Ref may disapper!
        svgGroupRef.current.children[i].style.transform = `
        translate(${iconNodes[i].x}px, ${iconNodes[i].y}px)
        `
      }
    }
  }
  useEffect(() => {
    iconNodes = [...state.iconNodes.slice(0, iconMax)]
    const simulation = forceSimulation(iconNodes)
      .force('charge', forceManyBody().strength(15))
      .force('center', forceCenter(225, 225))
      .force('collision', forceCollide().radius(15))
    simulation.on('tick', () => ticked())
  }, [])
  const iconStyle = {
    fontSize: '25px',
    fill: getStyle(state.theme, styleTypes.GENERIC).background(true),
    stroke: 'gray',
  }
  return (
    <svg
      className="main"
      width="450"
      height="450"
    >
      <rect
        fill="white"
        width="100%"
        height="450"
      />
      <g ref={svgGroupRef} className={getStyle(state.theme, styleTypes.GENERIC).main()}>
        {state.iconNodes.slice(0, iconMax).map(n => {
          return (
            <text
              key={`${Math.random()}${n.name}`}
              style={iconStyle}
              className="material-icons"
            >
              {n.name}
            </text>
          )
        })}
      </g>
    </svg>
  )
}
export default ForceLayoutChart
