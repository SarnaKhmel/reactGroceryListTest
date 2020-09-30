import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <header style={headerStyle}> Happy shopping! </header> 
    )
}

const headerStyle = {
    color: 'teal',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '10px'
}


export default Footer