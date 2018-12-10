import React, { Component } from 'react'
import { DressageTest } from '../requests'
import TestInfo from './TestInfo.js'
import MovesList from './MovesList.js'

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
                <p> Hi this is the test show page!! </p>

                <TestInfo {...test}></TestInfo>
                <MovesList {...test}></MovesList>
            </div>

        )
    }
}

export default DressageShowPage
