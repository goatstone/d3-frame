import React from 'react'

const withEvents = (WrappedComponent, events) => {
    return (props) => {
        return <WrappedComponent controlEvent={events} {...props} />
    }
}

export default withEvents
