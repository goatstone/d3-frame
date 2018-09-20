import EventEmitter from 'events'
import React from 'react'
import Info from './component/Info'
import BarChart from './component/BarChart/'
import LineChart from './component/LineChart'
import PieChart from './component/PieChart'
import Control from './component/Control'
import './container.scss'
import withResources from './component/hoc/with-resources'
import config from './config'

const events = new EventEmitter()
const LineChartWrapper = withResources(LineChart, { events })
const PieChartWrapper = withResources(PieChart, { events, options: config.options })
const ControlWrapper = withResources(Control, { events, config })
class D3React extends React.Component {
    constructor({
        data,
    }) {
        super(...Array.from(arguments))
        this.state = {
            data,
            chartConfig: config.chart,
            chartType: config.options.types[1].name, // the selected chart
            isInfoVissible: false,
        }
        this.controlEvent = events
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
                {this.state.chartType === 'bar' && <div>
                    <BarChart
                        data={this.state.data.bar}
                        config={this.state.chartConfig}
                        />
                </div>
                }
                {this.state.chartType === 'line' && <div><LineChartWrapper
                    data={this.state.data.line}
                    config={this.state.chartConfig}
                    />
                </div>
                }
                {this.state.chartType === 'pie' && <div>
                    <PieChartWrapper
                        data={this.state.data.bar}
                        config={this.state.chartConfig}
                        />
                    <h3>The Frequency of Letters in the English Language</h3>
                </div>
                }
                {this.state.isInfoVissible &&
                    <Info onClick={this.hideInfo} />
                }
                <ControlWrapper
                    chartConfig={this.state.chartConfig}
                    chartType={this.state.chartType}
                    options={this.options}
                    />
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
