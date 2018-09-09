export default {
    chart: {
        style: {
            margin: '20px',
            background: 'gray',
        },
        charts: [
            { name: 'line', display: 'Line' },
            { name: 'pie', display: 'Pie' },
            { name: 'bar', display: 'Bar' },
        ],
        symbols: [
            { name: 'symbolCircle', display: 'Circle' },
            { name: 'symbolSquare', display: 'Square' },
            { name: 'symbolTriangle', display: 'Triangle' },
        ],
        selectedChart: '',
        selelctedSymbol: '',
        size: { width: '100%', height: 200 },
        colors: [
            { name: 'red', display: 'Red' },
            { name: 'blue', display: 'Blue' },
            { name: 'green', display: 'Green' },
            { name: 'white', display: 'White' },
            { name: 'gray', display: 'Gray' },
        ],
        types: [
            { name: 'line', display: 'Line' },
            { name: 'pie', display: 'Pie' },
            { name: 'bar', display: 'Bar' },
        ],
    },
    control: {
        style: {
            color: 'blue',
            background: 'gray',
        },
        controls: [
            { name: 'color', isVisible: true },
            { name: 'symbol', isVisible: true },
            { name: 'type', isVisible: true },
        ],
    },
}
