import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {monsters:[],
      searchFiled:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  render(){
    return  ( <div className='App'>
      <input type='search' placeholder='search' onChange={(event)=>this.setState({ searchFiled: event.target.value },()=>console.log(this.state))
    }/>
      <CardList monsters={this.state.monsters}/>
    </div>)

  }
}

export default App;
