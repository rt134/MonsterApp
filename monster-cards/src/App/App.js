import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/Card-list/card-list';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => 
      this.setState({monsters: users})
      );
  }

  render(){
    return (
      <>
      <div className="App">
        <input></input>
        <CardList monsters={this.state.monsters} />
      </div>
      </>
    );
  }
}

export default App;
