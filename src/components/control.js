import React from 'react'

function Control({
    events,
    config,
    colors,
    chartSymbol,
    chartType,
}) {
    function emitEvent(e) {
        const { name, value } = e.target
        events.emit(name, value)
    }
    const color = (
        <label key="color" data-id="control.color">
            Color
            <select
                name="color"
                onChange={emitEvent}
                value={colors.background}
            >
                {config.chart.colors
                    .map(co => <option value={co.name} key={co.name}>{co.display}</option>)}
            </select>
        </label>)
    const symbol = (
        <label key="symbol" data-id="control.symbol">
            Symbol
            <select
                name="chartSymbol"
                onChange={emitEvent}
                value={chartSymbol}
            >
                {config.chart.symbols
                    .map(cso => <option value={cso.name} key={cso.name}>{cso.display}</option>)}
            </select>
        </label>)
    const type = (
        <label key="type" data-id="control.type">
            Type
            <select
                name="chartType"
                onChange={emitEvent}
                value={chartType}
            >
                {config.chart.types
                    .map(cto => <option value={cto.name} key={cto.name}>{cto.display}</option>)}
            </select>
        </label>)

    const elements = { type, color, symbol }
    const visibleElements = []

    config.control.controls.forEach((e) => {
        if (elements[e.name] && e.isVisible) {
            visibleElements.push(elements[e.name])
        }
    })

    return (
        <section data-id="control">
            <form>
                {visibleElements}
            </form>
        </section>
    )
}
export default Control
