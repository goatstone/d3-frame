import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'events'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import datum from './datum'

const pieData = [1, 1, 2, 3, 5, 8, 13, 21];
const controlEvent = new EventEmitter()
const chartSize = { width: 400, height: 200 }
const colorOptions = [
    { name: 'red', display: 'Red' },
    { name: 'blue', display: 'Blue' },
    { name: 'green', display: 'Green' },
    { name: 'white', display: 'White' },
    { name: 'gray', display: 'Gray' },
]
const chartTypeOptions = [
    { name: 'line', display: 'Line' },
    { name: 'pie', display: 'Pie' },
    { name: 'histogram', display: 'Histogram' },
]
const chartSymbolOptions = [
    { name: 'symbolCircle', display: 'Circle' },
    { name: 'symbolSquare', display: 'Square' },
    { name: 'symbolTriangle', display: 'Triangle' },
]

ReactDOM.render(<App
    colorOptions={colorOptions}
    controlEvent={controlEvent}
    datum={{line: datum, pie: pieData}}
    chartSize={chartSize}
    chartTypeOptions={chartTypeOptions}
    chartSymbolOptions={chartSymbolOptions}
    />,
    document.getElementById('root'));
registerServiceWorker();
