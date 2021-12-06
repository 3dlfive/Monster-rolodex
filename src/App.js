import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {monsters:[
      {name:'Frankenstain',
    id:'1233'},
      {name:'Dracula',
      id:'21233'},
      {name:'Zombie',
      id:'a123'}
    ]}
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((el)=><h1 key={el.id}>{el.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
