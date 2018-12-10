import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Segment } from 'semantic-ui-react';

function TestSegmentItem(props) {
    const {
        full_name, id 
    } = props

    return (
        <div className="TestSegmentItem">
           <Segment> <Link to={`/tests/${id}`}> {full_name} </Link> </Segment>
        </div>
    )

}

export default TestSegmentItem
