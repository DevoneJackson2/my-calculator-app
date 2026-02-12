import { useState } from 'react'
import './App.css'

function App() {
  const [expression, SetExpression] = useState("");
  const [result, SetResult] = useState("");

  function handleChange(event)
  {
    SetExpression(event.target.value);
    console.log(expression);
  }

  return (
    <>
      <h1>My Calculator App</h1>
      <input type="text" id="exprBox" onChange={handleChange} value={expression} placeholder='Please enter an expression...'></input>
      <p>{result}</p>

      <div id="buttons">
        <div id="operators">
          <OperatorButton symbol="+" type="op" expr={expression} SetExpr={SetExpression}/>
          <OperatorButton symbol="-" type="op" expr={expression} SetExpr={SetExpression}/>
          <OperatorButton symbol="X" type="op" expr={expression} SetExpr={SetExpression}/>
          <OperatorButton symbol="/" type="op" expr={expression} SetExpr={SetExpression}/>
          <OperatorButton symbol="(" type="op" expr={expression} SetExpr={SetExpression}/>
          <OperatorButton symbol=")" type="op" expr={expression} SetExpr={SetExpression}/>
          <SubmitButton expr={expression} SetResult={SetResult}/>
        </div>
        <br></br>
        <div id="numbers">
          <NumberButton symbol="7" expr={expression} SetExpr={SetExpression}/>
          <NumberButton symbol="8" expr={expression} SetExpr={SetExpression}/>
          <NumberButton symbol="9" expr={expression} SetExpr={SetExpression}/>
          <br></br>
          <NumberButton symbol="4" expr={expression} SetExpr={SetExpression}/>
          <NumberButton symbol="5" expr={expression} SetExpr={SetExpression}/>
          <NumberButton symbol="6" expr={expression} SetExpr={SetExpression}/>
          <br></br>
          <NumberButton symbol="1" expr={expression} SetExpr={SetExpression}/>
          <NumberButton symbol="2" expr={expression} SetExpr={SetExpression}/>
          <NumberButton symbol="3" expr={expression} SetExpr={SetExpression}/>
          <br></br>
          <NumberButton symbol="0" expr={expression} SetExpr={SetExpression}/>
        </div>
      </div>
    </>
  )
}


function SubmitButton({expr, SetResult})
{
  return (
    <button class="op res">=</button>
  )
}

function NumberButton({symbol, expr, SetExpr})
{
  return <Button symbol={symbol} expr={expr} type="num" SetExpr={SetExpr}/>
}

function OperatorButton({symbol, expr, SetExpr})
{
  return <Button symbol={symbol} type="op" expr={expr} SetExpr={SetExpr}/>
}


function Button({symbol, type, expr, SetExpr})
{
  return (
    <button onClick={() => {SetExpr(expr + symbol); console.log(expr)}} class={type}>{symbol}</button>
  )
}


export default App
