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
      <img src="d3-frame-logo.png" alt="D3 Frame Art" width="25" height="25" />
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
