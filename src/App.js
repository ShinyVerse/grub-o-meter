import React, { Component } from 'react';
import MealList from './components/MealList/MealList';
import './App.css';

class App extends Component {
  render() {
    const list = [
       {
          title:'Breakfast',
          id: 'meal1'
        },
        {
          title:'Lunch',
          id: 'meal2'
        },
        {
          title:'Dinner',
          id: 'meal2'
        },
        {
          title:'Snacks',
          id: 'meal2'
        },
      ]
    return (
      <div data-test='component-main-div' className='App'>
        <MealList list={list} />
      </div>
    );
  }
}

export default App;
