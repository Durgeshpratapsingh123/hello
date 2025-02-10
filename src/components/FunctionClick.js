import React from 'react'

function clickHandler(){
    console.log('Button clicked')
}

function FunctionClick() {
  return (
    <div>
        <h1>FunctionClick</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default FunctionClick
