import React from 'react'

import BarChart from '../BarChart/'
import LineChart from '../LineChart'
import PieChart from '../PieChart'

function Chart({
    chartType,
    chartConfig,
}) {
    return (
        <div>
            {chartType === 'bar' && <BarChart
                config={chartConfig}
                />
            }
            {chartType === 'line' && <LineChart
                config={chartConfig}
                events
                />

            }
            {chartType === 'pie' && <div><PieChart
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
