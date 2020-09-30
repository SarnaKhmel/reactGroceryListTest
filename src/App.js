import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid'; 
import Grocerys from './components/Grocerys';
import AddGrocery from './components/AddGrocery';

import './App.css';


class App extends Component {
  state = {
    grocerys: [
      {
        id: uuidv4(),
        title: 'Eggs', 
        // priority: 1,
        completed: false
      },
      {
        id:uuidv4(),
        title: 'Milk', 
        // priority: 2,
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Berry', 
                // priority: 3,
        completed: false
      }
    ],  
  }

  markComplete = (id) => {     
  this.setState({
    grocerys: this.state.grocerys.map(grocery => {  
      if(grocery.id === id) {
        grocery.completed = !grocery.completed
      }
      return grocery;  
    }) 
  });
}

  delGrocery = (id) => {
    this.setState({
      groserys: [...this.state.groserys.filter(grosery => 
        grosery.id !== id)] });
  }


  
  addGrocery = (title) => {
    const newGrocery = {
      id: uuidv4(), // random id
      title: title,
      completed: false
    }
    this.setState({
      grocery: [...this.state.grocerys, newGrocery]    
    })
  }

  render() {
    //console.log(this.state.grocerys);   //Test
    return (
      <Router>
        <div className="App"> 
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => ( 
              <React.Fragment>
                <AddGrocery addTodo1={this.addGrocery} />
                <Grocerys grocery={this.state.grocerys} markComplete={this.markComplete} delGrocery={this.delGrocery}/>
              </React.Fragment>
            )} />
            <Route exact path="/about" component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
