import React from 'react'
import './control.css'

function Control({controlEvent, colors, colorOptions}) {
    function emitEvent(e) {
        const name = e.target.name
        const value = e.target.value
        controlEvent.emit(name, value)
    }
    return (
        <section>
            <form>
                <label>
                    Color
                    <select name="color"
                        onChange={emitEvent}
                        value={colors.background}
                        >
                        {colorOptions
                            .map(co => <option value={co.name} key={co.name}>{co.display}</option>)}
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