import React from 'react'

const Info = props => (
        <section
    data-id="info"
    onClick={props.onClick}
        >
        <div>
        <h2>D3 Framework</h2>
        <p>
        This site is the implementation of a series of methodologies for using the D3 visualization library with ReactJS and other frameworks.
        </p>
        <a href="https://github.com/JoseHerminioCollas/d3-react" target="new">
        D3 Framework Github
    </a>
        <a href="http://goatstone.com" target="new">
        Goatstone &copy; 2018
    </a>

    </div>
        </section>
)
export default Info
