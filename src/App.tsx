import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField';
import { Counter } from './components/Counter';

//important to put the FC here, so typescript knows what we are delaing with
const App:FC = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's practice</h1>
        <TextField text="hello" person={{firstName:"alan" , lastName:"cont"}} 
        handleChange={(e)=>{
          //now we have autocomplete here.
          console.log(e);
        }}
        />

        <Counter>
          {(count, setCount)=>(
            <div>
              {count}
              <button onClick={()=> setCount(count+1)}>+</button>  
            </div>
            
          )}
        </Counter>
      </header>
    </div>
  );
}

export default App;
