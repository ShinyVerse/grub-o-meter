import React, { Component } from 'react';
import MealList from './components/MealList/MealList';
import ImageTallyContainer from './components/ImageTallyContainer/ImageTallyContainer';
import iconWater from './assets/water.svg';
import iconVeg from './assets/veg.svg';
import iconBed from './assets/bed.svg';
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
          id: 'meal3'
        },
        {
          title:'Snacks',
          id: 'meal4'
        },
      ]
    return (
      <div data-test='component-main-div' className='App'>
        <MealList list={list} />
        <ImageTallyContainer type="water" icon={iconWater} amount={7}/>
        <ImageTallyContainer type="veg" icon={iconVeg} amount={5}/>
        <ImageTallyContainer type="bed" icon={iconBed} amount={8}/>
      </div>
    );
  }
}

export default App;
