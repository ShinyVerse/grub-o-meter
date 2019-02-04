import React from 'react';

const Input = (props) => {
  return (
    <div data-test='component-input'>
      <label className='label-event-title'>{props.title}
        <input className='form-user-input'>
        </input>
      </label>
    </div>
  )
}

export default Input;
