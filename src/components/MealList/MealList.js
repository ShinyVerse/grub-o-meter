import React from 'react';
import Input from '../Input/Input';

const MealList = (props) => {
  return (
    <ul data-test='component-meal-list'>
      {props.list.map(item => {
        return (
          <li key={item.id} data-test="meal-list-item">
            <Input title={item.title} />
          </li>
        )
      })}
    </ul>
  )
}

export default MealList;
