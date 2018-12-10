import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react';


class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='AboutPage'>
            <Container text>

                <h2> About </h2>

                <p> Hi From the About Page! </p>
            </Container>
            </div>
        )
    }
}

export default About