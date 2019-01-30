import React, { Component } from 'react';
import MealList from './components/MealList/MealList';
import ImageTallyItem from './components/ImageTallyItem/ImageTallyItem';
import iconWater from './assets/water.svg';
import './App.css';

class App extends Component {
  render() {

    const iconClicker = (id) => {
      console.log(id);
    }
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
        <ImageTallyItem icon={iconWater}
          isSelected={true}
          id='icon-water-1'
          iconClicker={iconClicker} />
          <ImageTallyItem icon={iconWater}
            isSelected={false}
            id='icon-water-2'
            iconClicker={iconClicker} />
      </div>
    );
  }
}

export default App;
