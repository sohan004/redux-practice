import { useDispatch, useSelector } from "react-redux";
import { countDecrement, setCount } from "./features/counter/CounterSlice";

const App = () => {

  const countValue = useSelector(state => state?.countReducer)
  const dispatch = useDispatch()






  const incrementFun = () => {
    dispatch(setCount(1))
  }


  const decrement = () => {
    dispatch(countDecrement(1))
  }




  return (
    <div className='app'>
      <h1>Counter: {countValue}</h1>
      <button onClick={incrementFun} className="btn">Increment</button>
      <button onClick={decrement} className="btn">Decrement</button>
    </div>
  );
};

export default App;