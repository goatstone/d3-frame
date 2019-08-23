import React from 'react'

function CopyCredit() {
  return (
    <section
      style={{
        fontSize: '12px',
        position: 'fixed',
        right: 0,
        bottom: 0,
      }}
    >
      <a href="http://goatstone.com" target="new">
        Goatstone &copy; 2019
      </a>
    </section>
  )
}

export default CopyCredit
