import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,0);

console.log(state)
function increaseHandel () {
  dispatch({type:"add",payload:state})
}

function decreaseHandel () {
  dispatch({type:"minus",payload:state});
 
 
}
  return (
    <div id="main">
        <button id='increment-btn' onClick={increaseHandel}>+</button>
        <span id='counter'>{state}</span>
        <button id='decrement-btn' onClick={decreaseHandel}>-</button>
    </div>
  )
}


export default App;
