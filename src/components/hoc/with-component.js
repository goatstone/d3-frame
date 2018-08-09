import React from 'react'

const withComponent = (WrappedComponent, Component, propName) => {
    return (props) => {
        return <WrappedComponent {...{ [propName]: Component }} {...props} />
    }
}

export default withComponent
