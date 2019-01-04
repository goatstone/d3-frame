import React from 'react'

import BarChart from '../BarChart/'
import LineChart from '../LineChart'
import PieChart from '../PieChart'

function Chart({
    chartType,
    data,
    chartConfig,
}) {
    return (
        <div>
            {chartType === 'bar' && <BarChart
                data={data.bar}
                config={chartConfig}
                />
            }
            {chartType === 'line' && <LineChart
                data={data.line}
                config={chartConfig}
                events
                />

            }
            {chartType === 'pie' && <div><PieChart
                data={data.bar}
                config={chartConfig}
                events
                options={chartConfig.options}
                />
                <h3>The Frequency of Letters in the English Language</h3>
            </div>
            }
        </div >
    )
}

export default Chart
