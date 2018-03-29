import React from 'react'
import './control.css'

function Control({
    controlEvent,
    colors,
    chartSymbol,
    chartType,
    colorOptions,
    chartTypeOptions,
    chartSymbolOptions
}) {
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
                    <select
                        name="color"
                        onChange={emitEvent}
                        value={colors.background}
                        >
                        {colorOptions
                            .map(co => <option value={co.name} key={co.name}>{co.display}</option>)}
                    </select>
                </label>
                <label>
                    Symbol
                    <select
                        name="chartSymbol"
                        onChange={emitEvent}
                        value={chartSymbol}
                        >
                        {chartSymbolOptions
                            .map(cso => <option value={cso.name} key={cso.name}>{cso.display}</option>)}
                    </select>
                </label>
                <label>
                    Type
                    <select
                        name="chartType"
                        onChange={emitEvent}
                        value={chartType}
                        >
                        {chartTypeOptions
                            .map(cto => <option value={cto.name} key={cto.name}>{cto.display}</option>)}
                    </select>
                </label>
            </form>
        </section>
    )
}
export default Control