import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'events'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import datum from './datum'

const colorOptions = [
    { name: 'red', display: 'Red' },
    { name: 'blue', display: 'Blue' },
    { name: 'green', display: 'Green' },
    { name: 'white', display: 'White' },
    { name: 'gray', display: 'Gray' },
]
const controlEvent = new EventEmitter()
const chartSize = {width: 400, height: 200 }
ReactDOM.render(<App
    colorOptions={colorOptions}
    controlEvent={controlEvent}
    datum={datum}
    chartSize={chartSize}
    />,
    document.getElementById('root'));
registerServiceWorker();
