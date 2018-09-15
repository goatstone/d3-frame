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
        color: {
            background: 'blue',
            foreground: 'gray',
            axis: '#666',
            label: '#ddd',
            theme: [],
        },
        background: 'blue',
        width: 600,
        containerWidth: 700,
        height: 300,
        barHeightMax: 190,
        margin: [50, 20, 20, 55],
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
