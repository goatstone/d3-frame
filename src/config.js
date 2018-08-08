export default {
    chart: {
        size: { width: 400, height: 200 },
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
            { name: 'hello', display: 'Hello' },
        ],
    },
    symbols: [
        { name: 'symbolCircle', display: 'Circle' },
        { name: 'symbolSquare', display: 'Square' },
        { name: 'symbolTriangle', display: 'Triangle' },
    ],
    control: [
        { name: 'color', isVisible: true },
        { name: 'symbol', isVisible: true },
        { name: 'type', isVisible: true },
    ],
}
