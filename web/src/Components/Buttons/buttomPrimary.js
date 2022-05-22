import React from 'react';

const ButtomPrimary = ({ buttomTitle, buttomStyle }) => {
    return (
        <button style={buttomStyle} onSubmit={click => null}>{buttomTitle}</button>
    )
}

export default ButtomPrimary;