import React from 'react';

const Input = (props) => {
  return (
    <div data-test='component-input'>
      <label className='label-meal-title'>{props.title}</label>
      <input className='form-user-input'>
      </input>
    </div>
  )
}

export default Input;
