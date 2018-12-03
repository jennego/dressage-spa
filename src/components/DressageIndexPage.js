import React, { Component } from 'react'
import { DressageTest } from '../requests'


class DressageIndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dressage_tests: []
        }
    }
    componentDidMount() {
        DressageTest
            .getAll()
            .then(data => { this.setState({ dressage_tests: data.dressage_tests }); })
    }

    render() {
        return (
            <div className='DressageTestsIndexPage'>

            <p> Hi From the DressageIndexPage! </p>

        {
            this.state.dressage_tests.map(test => (
                <p> {test.id} {test.level} {test.name}  </p>
            ))
        }

            </div>
        )
    }
}

export default DressageIndexPage