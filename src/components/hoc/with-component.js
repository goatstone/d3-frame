import React from 'react'

const withComponent = (WrappedComponent, Component) => {
    const componeantName = Component.name
    return (props) => {
        return <WrappedComponent {...{ [componeantName]: Component }} {...props} />
    }
}

export default withComponent
