import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addValue, decrementCount, incrementCount } from "./store/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    dispatch(incrementCount());
  };
  const handleDecrement = () => {
    dispatch(decrementCount());
  };
  const handleClick = () => {
    dispatch(addValue(value));
    setValue(0);
  };
  return (
    <div className="App">
      <h2>Counter:{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Add Value</button>
    </div>
  );
}

export default App;
