import React, { Component } from 'react'
import { DressageTest } from '../requests'
import {Link} from 'react-router-dom'


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
                    <li key={test.id}> <Link to={`/test/${test.id}`}>  {test.level} {test.name} </Link>  </li>
                )) }
            </ul>
            </div>

            </div>
        )
    }
}

export default DressageIndexPage