import React from 'react';

const ImageTallyItem = (props) => {
  let cssToggle
  cssToggle = props.isSelected ?  'icon' : 'icon unselected';
  return (
    <img alt='icon' src={props.icon} onClick={(e) => {props.iconClicker(e)}} className={cssToggle} data-test='component-tally-item' />
  )
}

export default ImageTallyItem;
