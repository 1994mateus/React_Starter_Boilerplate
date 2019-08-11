import './index.css';
import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <span>{process.env.VARIABLE_NAME}</span>
            <p>This is a react's hook example: {count}</p>
            <button style={{width: '10%'}} onClick={() => setCount(count + 1)}>Adiciona</button>
        </div>
    )
};

export default App;
