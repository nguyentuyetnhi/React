import React, { Component } from 'react';
import './App.css';
import Main from './Component/MainComponent';
import Menu from './Component/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (

      <div className="App">
        <Main />
  <Menu/>
      </div>
     
    );
  }
}

export default App;
