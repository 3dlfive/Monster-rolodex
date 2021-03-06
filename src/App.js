import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'

import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {monsters:[],
      searchFiled:''
    };

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value })
  }

  render(){
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchFiled.toLowerCase())
      );
    return  ( <div className='App'>
      <h1>Monsters search App</h1>
      <SearchBox
      placeholder='search'
      handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>)

  }
}

export default App;
