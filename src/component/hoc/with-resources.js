import React from 'react'

const withResources = (Component, resources) => {
    return (props) => {
        return <Component {...resources} {...props} />
    }
}

export default withResources
