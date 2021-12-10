import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {monsters:[]}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({monsters:users}))
  }
  render(){
    return (
      <div className="App">
      <CardList name="Denys">
        <h1>Denys</h1>
      </CardList>
        {
          this.state.monsters.map((el)=><h1 key={el.id}>{el.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
