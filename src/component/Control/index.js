import React from 'react'
import './control-style.scss'

function Control({
    events,
    chartConfig,
    chartType,
    options,
}) {
    function emitEvent(e) {
        e.preventDefault()
        const { name, value } = e.target
        events.emit(name, value)
    }
    const Button = () => (
        <button name="info" value="show" onClick={emitEvent}>
            ?
            </button>
    )
    return (
        <section data-id="control">
            <form>
                <label key="info" data-id="control.info">
                    <Button />
                </label>
                <label key="type" data-id="control.type">
                    Chart Type
                    <select name="chartType" onChange={emitEvent} value={chartType}>
                        {options.types
                            .map(cto =>
                                <option value={cto.name} key={cto.name}>{cto.display}</option>)
                        }
                    </select>
                </label>
                <label key="color" data-id="control.color">
                    Theme
                    <select
                        name="theme"
                        onChange={emitEvent}
                        value={chartConfig.theme}
                        >
                        {Object.entries(options.themes)
                            .map(co => (
                                <option
                                    value={co[0]}
                                    key={co[0]}>
                                    {co[1].name}
                                </option>))
                        }
                    </select>
                </label>
                {chartType === 'line' && (
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
                }
            </form>
        </section>
    )
}
export default Control
