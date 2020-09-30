import React, {Component} from 'react'
import PropTypes from 'prop-types';

export class GrocerysItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.grocery.completed ? 
            'line-through' : 'none',
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px'
        }  
    }

    render() {
        const {id, title} = this.props.grocery;      
        return (
           
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
                    {' '}   
                    {title}
                    <button onClick={this.props.delTodo2.bind(this, id)} style={btnStyle}> x </button>    
                </p>
            </div>
        )
    }
}

GrocerysItem.propTypes = {
    grocery: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '6px 10.5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}



export default GrocerysItem
