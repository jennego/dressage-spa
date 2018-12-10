import React from 'react';

function TestInfo(props) {
    const {
        name, level, year, orgname, full_name, notes
    } = props;
    console.log(props);

    return (
        <div className="TestInfo">
            <h2>{full_name}</h2>
            <p> </p>
        </div>
    );
}

export default TestInfo;