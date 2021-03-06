import React, { Component } from 'react';
import EventList from './components/MealList/EventList';
import ImageTallyContainer from './components/ImageTallyContainer/ImageTallyContainer';
import iconWater from './assets/water.svg';
import iconVeg from './assets/veg.svg';
import iconBed from './assets/bed.svg';
import iconExercise from './assets/exercise.svg';
import iconGoal from './assets/achievement.svg';
import listItems from './assets/list.json';
import './App.css';



class App extends Component {
  render() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date  = new Date();
    let today = date.toLocaleDateString('en-EU', options)
    const list = listItems
    return (
      <div data-test='component-main-div' className='App'>
        <div id='date'>{today}</div>
        <EventList list={list} />
        <div className='tally-master-container'>
          <ImageTallyContainer title='Glasses of Water' type="water" icon={iconWater} amount={8}/>
          <ImageTallyContainer title='Fruit and Veg' type="veg" icon={iconVeg} amount={7}/>
          <ImageTallyContainer title='Exercised?' type="exercise" icon={iconExercise} amount={1}/>
          <ImageTallyContainer title='Achievements Today' type="goals" icon={iconGoal} amount={3}/>
          <ImageTallyContainer title='Hours of Sleep' type="bed" icon={iconBed} amount={10}/>

        </div>
      </div>
    );
  }
}

export default App;
