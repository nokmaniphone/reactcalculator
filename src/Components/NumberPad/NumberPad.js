import React from 'react'

function NumberPad(props) {

  return (
    <div className='row'>
      <button
        value='7'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        7
      </button>
      <button
        value='8'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        8
      </button>
      <button
        value='9'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        9
      </button>
      <button
        value='x'
        className='col button btn-danger p-3 border-secondary items'
        onClick={e => props.handleOpInput(e.target.value)}
      >
        x
      </button>
      <div className='w-100'></div>
      <button
        value='4'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        4
      </button>
      <button
        value='5'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        5
      </button>
      <button
        value='6'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        6
      </button>
      <button
        value='+'
        className='col button btn-danger p-3 border-secondary items'
        onClick={e => props.handleOpInput(e.target.value)}
      >
        +
      </button>
      <div className='w-100'></div>
      <button
        value='1'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        1
      </button>
      <button
        value='2'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        2
      </button>
      <button
        value='3'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        3
      </button>
      <button
        value='-'
        className='col button btn-danger p-3 border-secondary items'
        onClick={e => props.handleOpInput(e.target.value)}
      >
        -
      </button>
      <div className='w-100'></div>
      <button
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.resetCalc()}
      >
        C
      </button>
      <button
        value='0'
        className='col button btn-info p-3 border-secondary items'
        onClick={e => props.handleNumberInput(e.target.value)}
      >
        0
      </button>
      <button
        className='col button btn-success p-3 border-secondary items'
        onClick={e => props.handleEqualInput()}
      >
        =
      </button>
      <button
        value='/'
        className='col button btn-danger p-3 border-secondary items'
        onClick={e => props.handleOpInput(e.target.value)}
      >
        /
      </button>
    </div>
  )
}

export default NumberPad