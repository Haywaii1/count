import React, {useState} from "react";

function Counter() {
const [counter, setCounter] = useState(0);

const incrementCount = () => setCounter(counter + 1);

const decrementCount = () => setCounter(counter - 1);

let resetCount = () => setCounter(0);

return (
    <div>
        <p>counter is : {counter}</p>
        <button onClick={incrementCount}>Increase Button</button>
        <button onClick={decrementCount}>Decrease Button</button>
        <button onClick={resetCount}>Reset</button> 
        </div>
);
}

export default Counter;
