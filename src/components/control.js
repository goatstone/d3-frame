import React from 'react'
import './control.css'

function Control() {
  return (
    <section>
      <form>
        <label>
          Color
        <select>
            <option>Gray</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
        </label>
        <label>
          Symbol
        <select>
            <option>Circle</option>
            <option>Square</option>
            <option>Triangle</option>
          </select>
        </label>
        <label>
          Type
        <select>
            <option>Line</option>
            <option>Pie</option>
            <option>Histogram</option>
          </select>
        </label>
        <input type="button" value="Generate Data" />
      </form>
      <h3>Control</h3>
    </section>
  )
}
export default Control