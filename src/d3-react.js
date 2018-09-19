import React from 'react'
import Info from './component/Info'
import './container.scss'

class D3React extends React.Component {
    constructor({
        PieChart, LineChart, BarChart, Control, events, config, data,
    }) {
        super(...Array.from(arguments))
        this.state = {
            data,
            chartConfig: config.chart,
            chartType: config.options.types[0].name, // the selected chart
            isInfoVissible: false,
        }
        this.controlEvent = events
        this.PieChart = PieChart
        this.LineChart = LineChart
        this.BarChart = BarChart
        this.EventControl = Control
        this.options = config.options
        this.setEvents()
        this.hideInfo = this.hideInfo.bind(this)
    }
    // setEvents : set state as a result of the events being created: map events to application state
    setEvents() {
        this.controlEvent.on('color', (color) => {
            const chartConfig = Object.assign(
                {},
                this.state.chartConfig,
            )
            chartConfig.color.background = color
            this.setState({ chartConfig })
        })
        this.controlEvent.on('chartSymbol', (e) => {
            const chartConfig = Object.assign(
                {},
                this.state.chartConfig,
                { symbol: e },
            )
            this.setState({ chartConfig })
        })
        this.controlEvent.on('chartType', (e) => {
            this.setState({ chartType: e })
        })
        this.controlEvent.on('info', () => {
            this.setState({ isInfoVissible: true })
        })
    }
    setColor() {
        const colors = ['red', 'yellow', 'gray', 'blue']
        const rn = Math.round(Math.random() * (colors.length - 1))
        const newColor = colors[rn]
        const chartConfig = Object.assign(
            {},
            this.state.chartConfig,
            { background: newColor },
        )
        this.setState({ chartConfig })
    }
    hideInfo() {
        this.setState({ isInfoVissible: false })
    }
    render() {
        return (
            <section data-id="container">
                {{
                    bar: <this.BarChart
                        data={this.state.data.bar}
                        config={this.state.chartConfig}
                    />,
                    line: <this.LineChart
                        data={this.state.data.line}
                        config={this.state.chartConfig}
                    />,
                    pie: <this.PieChart
                        data={this.state.data.bar} // set to PieChart to bar data
                        config={this.state.chartConfig}
                    />,
                }[this.state.chartType]}
                <this.EventControl
                    chartConfig={this.state.chartConfig}
                    chartType={this.state.chartType}
                    options={this.options}
                />

                {this.state.isInfoVissible &&
                    <Info onClick={this.hideInfo} />
                }

                <section data-id="info-min">
                    <a href="https://github.com/JoseHerminioCollas/d3-react" target="new">
                        D3 Framework
            </a>

                    <a href="http://goatstone.com" target="new">
                        Goatstone &copy; 2018
            </a>
                </section>

            </section>)
    }
}

export default D3React
