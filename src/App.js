import React from 'react';
import Menu from './Component/MenuComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

/*function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
*/class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">

       <Menu dishes={this.state.dishes} />
      </div>
    );
    
  }
}

export default App;
