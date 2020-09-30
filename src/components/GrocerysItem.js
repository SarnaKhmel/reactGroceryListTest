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
        const {id, title} = this.props.grocery;       // Destructuring so you can use shorter variables in the return statement
        return (
            // Call getStyle function with () so it's automatically run, whereas with markComplete fxn you only want it to take effect when event happens
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />      {/* To access passed down prop (fxn markComplete2) you need prop keyword. Bind keyword allows state to know which item is being marked complete */}
                    {' '}   
                    {title}
                    {/* <button onClick={this.props.delTodo2.bind(this, id)} style={btnStyle}> x </button>       Style defined below */}
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