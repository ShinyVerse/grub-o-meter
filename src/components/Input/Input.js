import React from 'react';

const Input = (props) => {
  return (
    <div data-test='component-input' className='eventlist-container'>
      <label className='label-event-title'>{props.title}
        <textarea className='form-user-input'>
        </textarea>
      </label>
    </div>
  )
}

export default Input;
