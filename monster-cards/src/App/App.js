import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/Card-list/card-list';
import SearchBox from '../Components/Search-Box/search-box';

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
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <>
      <div className="App">
        <SearchBox 
        placeholder='Search Monsters' 
        handleChange={e => this.setState({searchField : e.target.value})}
        />
        <CardList monsters={filteredMonsters} />

      </div>
      </>
    );
  }
}

export default App;
