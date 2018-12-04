import React, { Component } from 'react'
import { DressageTest } from '../requests'

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
        const { title } = this.state.dressage_test
        return (
            <div className="DressageShowPage">
                <p> Hi this is the test show page!! </p>
                <h2> {this.state.dressage_test.full_name} </h2>   
            </div>
        )
    }
}

export default DressageShowPage
