import React, {useState} from "react";

function Counter() {
const [counter, setCounter] = useState(0);

const incrementCount = () => {
    setCounter(counter -1)
};

return (
    <div>
        <p>counter is : {counter}</p>
        <button onClick={incrementCount}>-</button>
       
    </div>
);
}

export default Counter;