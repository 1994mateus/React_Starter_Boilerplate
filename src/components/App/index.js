import './index.css';
import React, { useState } from 'react';

import { HookExample } from 'components';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <span>{process.env.VARIABLE_NAME}</span>
      <HookExample count={count} />
      <button type="button" style={{ width: '10%' }} onClick={() => setCount(count + 1)}>Adiciona</button>
    </div>
  );
};

export default App;
