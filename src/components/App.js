import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{count:0});


function increaseHandel () {
  console.log("inc btn click")
  dispatch({type:"add",payload:state.count})
}

function decreaseHandel () {
  console.log("dec btn clicked");
  dispatch({type:"minus",payload:state.count});
 
 
}
  return (
    <div id="main">
        <button id='increment-btn' onClick={increaseHandel}>+</button>
        <span id='counter'>{state.count}</span>
        <button id='decrement-btn' onClick={decreaseHandel}>-</button>
    </div>
  )
}


export default App;
