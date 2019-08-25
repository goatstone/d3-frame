import React, { useContext } from 'react'
import 'material-icons/iconfont/material-icons.css'
import { ThemeContext } from '../../theme/ThemeContext'
import { StoreContext } from '../../StoreContext'

function TitleArea() {
  const { cssSheet } = useContext(ThemeContext)
  const { state, actions } = useContext(StoreContext)

  return (
    <div
      className={cssSheet.classes.titleArea}
    >
      <button
        onClick={actions.showInfo}
        type="button"
        disabled={state.isInfoVisible}
        style={{ backgroundImage: 'd3-frame-logo.png' }}
      >
        <img src="d3-frame-logo.png" alt="D3 Frame Art" width="25" height="25" />
      </button>
      <h1
        style={{
          margin: '6px',
          fontSize: '12px',
        }}
      >
        <a
          style={{
            textDecoration: 'none',
            fontSize: '12px',
          }}
          href="https://github.com/goatstone/d3-frame"
          target="new"
        >
          D3Frame
        </a>
      </h1>
    </div>
  )
}

export default TitleArea
