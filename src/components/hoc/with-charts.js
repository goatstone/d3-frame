import React from 'react'

const withCharts = (WrappedComponent, chartObj) => {
    return (props) => {
        return <WrappedComponent charts={chartObj} {...props} />
    }
}

export default withCharts
