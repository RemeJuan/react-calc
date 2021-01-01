import React, {useState} from 'react';
import './App.css';
import {KeyPadComponent, ResultComponent} from './components';
import {handleClick} from "./helpers/logic";

const App = () => {
  const [result, setResult] = useState<string>('');

  const onClick = (button: string) => setResult(handleClick(button, result));

  return (
    <div>
      <div className="calculator-body">
        <h1>EE Calculator</h1>
        <ResultComponent result={result}/>
        <KeyPadComponent onClick={onClick}/>
      </div>
    </div>
  );
}

export default App;
