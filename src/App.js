
import './App.css';
import { sum, rest, mult, div } from './calc';
import { useState } from 'react';

function App() {
const [num1 , setNum1]= useState(0)
const [num2 , setNum2]= useState(0)
  function calc(){
    alert(`${num1} + ${num2} = ${sum(num1,num2)}
${num1} - ${num2} = ${rest(num1,num2)}
${num1} * ${num2} = ${mult(num1,num2)}
${num1} / ${num2} = ${div(num1,num2)}`)
  }

  return (
    <div className="App">
     <input type="number" pattern='[0-9]*' value={num1} onChange={(e)=>setNum1(e.target.value)} />
   
     <input type="number" pattern='[0-9]*' value={num2} onChange={(e)=>setNum2(e.target.value)}/>
     <button onClick={calc}>
      Calcular
     </button>
     
    </div>
  );
}

export default App;
