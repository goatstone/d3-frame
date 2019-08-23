import React from 'react'
/**
button.info-panel  {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background: white;
}
button.info-panel  div{
  color: black;
  background: white;
  font-weight: 900;
  padding: 24px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
}
button.info-panel  div a{
  color: gray;
  display: block;
  width: 100%;
}
button.info-panel  {
  position: fixed;
  bottom: 0;
  right: 0;
  color: darkblue;
  padding: 12px;
}
button.info-panel  a{
  color: darkblue;
  padding: 12px;
}
*/
const Info = ({ onClick }) => (
  <button
    className="info-panel"
    onClick={onClick}
    onKeyPress={onClick}
    type="button"
    style={{
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: '0 30px',
      background: 'white',
    }}
  >
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
  </button>
)
export default Info
