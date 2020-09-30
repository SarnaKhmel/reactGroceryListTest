import React, { Component } from 'react'

export class AddGrocery extends Component {
    state = {
        title: ''
    }

    onChangeMethod = (e) => this.setState({
       
        [e.target.name]: e.target.value
    });

    onSubmitMethod = (e) => {
        e.preventDefault();
        this.props.addGrocery(this.state.title);
        this.setState({ title: ''});
    }

    render() {
        return (
            // HTML form:
            <form onSubmit={this.onSubmitMethod} style={{ display: 'flex' }}> 
                <input 
                    type="text" 
                    name="title"
                    placeholder="Add grocery item..." 
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title} 
                    onChange={this.onChangeMethod}  
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} 
                />  
            </form>
        )
    }
}

export default AddGrocery
