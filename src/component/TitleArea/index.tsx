import React from 'react'

function TitleArea() {
  return (
    <div
      style={{
        fontSize: '12px',
        display: 'flex',
        position: 'fixed',
        right: 0,
        bottom: 0,
      }}
    >
      <img src="d3-frame-logo.png" alt="D3 Frame Art" width="35" height="35" />
      <h1>
        <a href="https://github.com/goatstone/d3-frame" target="new">
          D3Frame
        </a>
      </h1>
    </div>
  )
}

export default TitleArea
