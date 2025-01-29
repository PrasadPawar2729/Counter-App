import React, { useEffect, useState } from 'react';
import { CounterModel } from '../Model/CounterModel';
import { CounterIntent } from '../Intents/CounterIntent';

export const CounterView = () => {
  const [count, setCount] = useState(CounterModel.counter$.getValue());
  const [autoIncrement, setAutoIncrement] = useState(CounterModel.autoIncrement$.getValue());

  useEffect(() => {
    const counterSub = CounterModel.counter$.subscribe(setCount);
    const autoIncrementSub = CounterModel.autoIncrement$.subscribe(setAutoIncrement);
    
    // Ensure that init is called only once
    CounterIntent.init();

    return () => {
      counterSub.unsubscribe();
      autoIncrementSub.unsubscribe();
    };
  }, []);

  return (
    <div className="card">
    <h1>Counter: {count}</h1>
   <div>
   <button className='INC' onClick={() => CounterModel.increment()}>+</button> 
   <button className='DEC' onClick={() => CounterModel.decrement()}>-</button>
   </div>
    <button className='Reset' onClick={() => CounterModel.reset()}>Reset</button> <br />
    <div className="toggle-switch-container">
        <label htmlFor="autoIncrementToggle" className="toggle-label">Auto Increment</label>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="autoIncrementToggle"
            checked={autoIncrement}
            onChange={() => CounterModel.toggleAutoIncrement()}
          />
          <label htmlFor="autoIncrementToggle" className="switch"></label>
        </div>
      </div>
  </div>
  );
};
