import { useState } from 'react'
import './App.css'

function App() {
  const [expression, setExpression] = useState("");

  return (
    <>
      <h1>My Calculator App</h1>
      <input type="text" id="exprBox" placeholder='Please enter an expression...'></input>

      <div id="buttons">
        <div id="operators">
          <Button symbol="+" type="op"></Button>
          <Button symbol="-" type="op"></Button>
          <Button symbol="x" type="op"></Button>
          <Button symbol="/" type="op"></Button>
          <Button symbol="=" type="op res"></Button>
        </div>
        <br></br>
        <div id="numbers">
          <Button symbol="7"></Button>
          <Button symbol="8"></Button>
          <Button symbol="9"></Button>
          <br></br>
          <Button symbol="4"></Button>
          <Button symbol="5"></Button>
          <Button symbol="6"></Button>
          <br></br>
          <Button symbol="1"></Button>
          <Button symbol="2"></Button>
          <Button symbol="3"></Button>
          <br></br>
          <Button symbol="0"></Button>
        </div>
      </div>
    </>
  )
}

function Button({symbol, type})
{
  return (
    <button class={type}>{symbol}</button>
  )
}

export default App
