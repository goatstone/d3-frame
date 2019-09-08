const chartStyle = {
  chartFrame: {
    color: 'red',
    fill: 'blue',
    stroke: 'green',
    // 650 x 300 is the SVG target size
    width: '600px',
    height: '300px',
    padding: '10px',
    margin: '33px',
  },
  chartXAxis: {
    color: 'black',
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: '1px',
    width: '500px',
    height: '300px',
    transform: 'translate(0, 300px)',
  },
  chartYAxis: {
    color: 'black',
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: '1px',
    width: '650px',
    height: '300px',
    transform: 'translate(0, 0)',
  },
  chartBars: {
    fontSize: '12px',
    color: 'orange',
    fill: 'gray',
    stroke: 'green',
    strokeWidth: '1px',
    width: '500px',
    height: '300px',
    transform: 'translate(0, 0)',
  },
  chartText: {
    fill: 'black',
    stroke: 'green',
    strokeWidth: '0',
    fontSize: '22px',
    transform: 'translate(0, 340px)',
  },
  chartPies: {
    transform: 'translate(290px, 130px)',
    fill: 'lightgray',
    stroke: 'black',
  },
  chartPiesText: {
    transform: 'translate(285px, 135px)',
    fontSize: '10px',
    fill: 'white',
    stroke: 'transparent',
    strokeWidth: '0',
  },
  chartIconForce: {
    fill: 'green',
    stroke: 'black',
    width: '500px',
    height: '400px',
  },
  titleArea: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
  },
}
export default chartStyle