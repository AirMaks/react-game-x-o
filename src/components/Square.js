import React from 'react';


export const Square = (props) => {
  return (
    <button className={props.value === 'X' ? 'square x': 'square o'} onClick={props.onClick}>
      {props.value}
    </button>
  ); 
}