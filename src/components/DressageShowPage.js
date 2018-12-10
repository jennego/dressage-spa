import React, { Component } from 'react'
import { DressageTest } from '../requests'
import TestInfo from './TestInfo.js'
import MovesList from './MovesList.js'
import { Container } from 'semantic-ui-react';

class DressageShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dressage_test: {}
        }
    }

    componentDidMount() {
        const { params } = this.props.match;

        DressageTest
            .get(params.id)
            .then(dressage_test => this.setState({ dressage_test }))
    }


    render() {
        const test = this.state.dressage_test
        return (
            <div className="DressageShowPage">
            <Container text>
                <p> Hi this is the test show page!! </p>

                <TestInfo {...test}></TestInfo>
                <MovesList {...test}></MovesList>
            </Container>
            </div>

        )
    }
}

export default DressageShowPage
