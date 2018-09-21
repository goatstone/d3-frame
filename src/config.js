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
        themes: {
            red: { hue: 0, name: 'Red' },
            green: { hue: 200, name: 'Green' },
            blue: { hue: 250, name: 'Blue' },
            gray: { hue: 0, saturation: 0, name: 'Gray' },
        },
    },
    chart: {
        color: {
            background: 'gray',
            foreground: 'darkblue',
            axis: '#666',
            label: '#eee',
            theme: [],
        },
        background: 'blue',
        width: 600,
        containerWidth: 700,
        height: 300,
        barHeightMax: 190,
        margin: [50, 20, 20, 55],
        symbol: 'symbolSquare',
        theme: 'gray',
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
