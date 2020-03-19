import React from 'react';
import './Main.css';

function Main(props) {
  return (
    <main className='container'>
      <div className='row no-gutters'>
        <div className='col-md-6 col-lg-4 m-sm-auto'>{props.children[0]}</div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-lg-3 m-sm-auto'>{props.children[1]}</div>
      </div>
    </main>
  );
}

export default Main;
