import React from 'react'

function Control({
    events,
    chartConfig,
    chartType,
    options,
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
        value={chartConfig.background}
            >
            {options.colors
             .map(co =>
                  <option value={co.name} key={co.name}>{co.display}</option>)
            }
        </select>
            </label>)
    const symbol = (
            <label key="symbol" data-id="control.symbol">
            Symbol
            <select
        name="chartSymbol"
        onChange={emitEvent}
        value={chartConfig.symbol}
            >
            {options.symbols
             .map(cso =>
                  <option value={cso.name} key={cso.name}>{cso.display}</option>)
            }
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
            {options.types
             .map(cto =>
                  <option value={cto.name} key={cto.name}>{cto.display}</option>)
            }
        </select>
            </label>)

    const Elements = () => {
        const visibleElements = [type, color]
        if (chartType === 'line') {
            visibleElements.push(symbol)
        }
        return visibleElements
    }
    return (
            <section data-id="control">
            <form>
            <Elements />
            </form>
            </section>
    )
}
export default Control
