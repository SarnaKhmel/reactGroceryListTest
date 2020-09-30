import React, { Component } from 'react';
import GroserysItem from './GrocerysItem';
import PropTypes from 'prop-types';

class Grocerys extends Component {
    
    render() {
        //console.log(this.props.grocery)
        return this.props.grocerys.map((grocery) => (
            <GroserysItem key={grocery.id} grocery={grocery} marckComplete={this.props.marckComplete} />
        ));
    }
}

Grocerys.propTypes = {
    grocery: PropTypes.array.isRequired
}

export default Grocerys;
