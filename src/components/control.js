import React from 'react'
import './control.css'

function Control({
    controlEvent,
    config,
    colors, // chartColors
    chartSymbol,
    chartType,
    colorOptions, // chartColorOptions
    chartTypeOptions,
    chartSymbolOptions,
}) {
    function emitEvent(e) {
        const { name, value } = e.target
        controlEvent.emit(name, value)
    }
    const color = (
        <label key="color">
            Color
            <select
                name="color"
                onChange={emitEvent}
                value={colors.background}
            >
                {colorOptions
                    .map(co => <option value={co.name} key={co.name}>{co.display}</option>)}
            </select>
        </label>)
    const symbol = (
        <label key="symbol">
            Symbol
            <select
                name="chartSymbol"
                onChange={emitEvent}
                value={chartSymbol}
            >
                {chartSymbolOptions
                    .map(cso => <option value={cso.name} key={cso.name}>{cso.display}</option>)}
            </select>
        </label>)
    const type = (
        <label key="type">
            Type
            <select
                name="chartType"
                onChange={emitEvent}
                value={chartType}
            >
                {chartTypeOptions
                    .map(cto => <option value={cto.name} key={cto.name}>{cto.display}</option>)}
            </select>
        </label>)

    const elements = { color, symbol, type }
    const visibleElements = []

    config.forEach((e) => {
        if (elements[e.name] && e.isVisible) {
            visibleElements.push(elements[e.name])
        }
    })

    return (
        <section>
            <form>
                {visibleElements}
            </form>
        </section>
    )
}
export default Control
