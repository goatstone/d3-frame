import React from 'react'

const Info = ({ onClick }) => (
  <button
    className="info-panel"
    onClick={onClick}
    onKeyPress={onClick}
    type="button"
  >
    <div>
      <h2>D3 Framework</h2>
      <p>
        This site is the implementation of a series of
        methodologies for using the D3 visualization library with ReactJS and other frameworks.
      </p>
      <img src="d3-frame-logo.png" alt="D3 Frame Art" />
      <a href="https://github.com/goatstone/d3-frame" target="new">
        D3 Framework Github
      </a>
      <a href="http://goatstone.com" target="new">
        Goatstone &copy; 2018
      </a>
    </div>
  </button>
)
export default Info
