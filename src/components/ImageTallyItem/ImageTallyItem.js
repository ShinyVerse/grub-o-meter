import React from 'react';

const ImageTallyItem = (props) => {
  return (
    <img
      alt='icon'
      src={props.icon}
      onClick={(e) => {props.iconClicker(e)}}
      data-test='component-tally-item'
      className={props.style} />
  )
}

export default ImageTallyItem;
