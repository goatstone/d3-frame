import React from 'react'
import { StoreContext } from '../../StoreContext'

function TitleArea() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }: any) => {
        return (
          <div className="title-area">
            <img src="d3-frame-logo.png" alt="D3 Frame Art" width="45" height="45" />
            <h1>
              <a href="https://github.com/goatstone/d3-frame" target="new">
                D3Frame
              </a>
            </h1>
            <button
              onClick={actions.showInfo}
              className="material-icons"
              type="button"
              disabled={state.isInfoVisible}
            >
              info
            </button>
          </div>

        )
      }
      }
    </StoreContext.Consumer>
  )
}

export default TitleArea
