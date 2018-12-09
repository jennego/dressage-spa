import React, { Component } from 'react'
import { DressageTest } from '../requests'
import {Link} from 'react-router-dom'
import TestSegmentItem from './TestSegmentItem';


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

            <div id="testlist"> 
            <ul>
                {  this.state.dressage_tests.map(test => (
                    <TestSegmentItem key={test.id} {...test}></TestSegmentItem>
                )) }
            </ul>
            </div>

            </div>
        )
    }
}

export default DressageIndexPage