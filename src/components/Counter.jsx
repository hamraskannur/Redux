import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux"


const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)

 const incrementHandler=()=>{
  dispatch({type:"increment"})
 }
 const decrementHandler=()=>{
  dispatch({type:"decrement"})
    
 }
 const incrementBy5Handler=()=>{
  dispatch({type:"incrementBy5",amount:5})
    
 }
 

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementBy5Handler}>increment by 5 </button>
        <button onClick={incrementHandler}>increment</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  );
};

export default Counter;
