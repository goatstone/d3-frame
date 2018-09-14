export default {
    options: {
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
        size: { width: 550, height: 200 },
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
    chart: {
        margin: [20, 20, 20, 30],
        background: 'gray',
        width: 600,
        height: 300,
        symbol: 'symbolSquare',
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
