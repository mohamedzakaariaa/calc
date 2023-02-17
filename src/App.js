import "./index.css"
import { useState } from "react"



function App() {

  const [result, setResult] = useState("");
  const [final_result, setFinal] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const ce = () => {
    setResult("");
    setFinal("");
  }
  const del = () =>{
    setResult(result.slice(0,-1))
  }
  const calc = () =>{
    try{
    setFinal(eval(result).toString())
    }
    catch(err){ 
      alert("Enter a valid input");
  }
  }
  const factorial = () =>{
    let factorial = 1;
    for (var i = result; i >= 1; i--) {
    factorial = factorial * i;
   }
   setFinal(factorial);
  }


  return (
  <div className="calculator">
    <div className="inputs">
        <input className="input_text" value={result}/>
        <input className="result_text" value={final_result}/>
    </div>
        <div className="buttons">
            <button name="1" onClick={handleClick} >1</button>
            <button name="2" onClick={handleClick} >2</button>
            <button name="3" onClick={handleClick} >3</button>
            <button name="+" onClick={handleClick} >+</button>
            <button name="4" onClick={handleClick} >4</button>
            <button name="5" onClick={handleClick} >5</button>
            <button name="6" onClick={handleClick} >6</button>
            <button name="-" onClick={handleClick} >-</button>
            <button name="7" onClick={handleClick} >7</button>
            <button name="8" onClick={handleClick} >8</button>
            <button name="9" onClick={handleClick} >9</button>
            <button name="*" onClick={handleClick} >&times;</button>
            <button name="CE" onClick={ce} >CE</button>
            <button name="0" onClick={handleClick} >0</button>
            <button name="DEL" onClick={del} >DEL</button>
            <button name="/" onClick={handleClick} >&divide;</button>
            <button name="!" onClick={factorial} >!</button>
            <button name="%" onClick={handleClick} >%</button>
            <button name="**" onClick={handleClick} >^</button>
            <button name="=" onClick={calc} >=</button>
        </div>
    </div>
  )
}

export default App
