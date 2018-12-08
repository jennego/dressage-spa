import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='AboutPage'>

                <h2> About </h2>

                <p> Hi From the About Page! </p>

            </div>
        )
    }
}

export default About