import React from 'react';

function Display(props) {
  return (
    <p className='bg-secondary text-white px-3 rounded-pill'>
      <span>{props.result ? props.result : props.displayVal}</span>
    </p>
  );
}

export default Display;
