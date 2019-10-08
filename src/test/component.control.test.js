import React from 'react'
// import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Control from '../component/Control'

Enzyme.configure({ adapter: new Adapter() })

// const StoreContext = React.createContext<any>(defaultState)

jest.mock('../StoreContext', () => {
  return {
    StoreContext: {
      Consumer: props => {
        console.log('abc', typeof props.children)
        return '<div>ZZZZ</div>'
      },
    },
  }
})

describe('Control', () => {
  it(' should  mount', () => {
    // const div = document.createElement('div')
    const el = Enzyme.mount(
      <Control />,
    )
    console.log('Argggg', el.text())
    // ReactDOM.unmountComponentAtNode(div)
  })
})
