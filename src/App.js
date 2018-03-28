import React from 'react'
import datum from './datum'
import A from './components/a'
import B from './components/b'
import Control from './components/control'
import './App.css'

function App(props) {
  return (
    <section data-id="container">
      <A datum={datum}
        height={200}
        width={400}
        />
      <Control />
      <B datum={datum} />
    </section>
  )
}

export default App
