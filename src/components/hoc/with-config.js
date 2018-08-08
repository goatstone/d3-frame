import React from 'react'

const withConfig = (WrappedComponent, config) => {
    return (props) => {
        return <WrappedComponent config={config} {...props} />
    }
}

export default withConfig
