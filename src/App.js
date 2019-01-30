import React, { Component } from 'react';
import Input from './components/Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test='component-main-div' className='App'>
        <Input title='Breakfast' />
      </div>
    );
  }
}

export default App;
