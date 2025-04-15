import { useState } from "react";

function App(){
  const [count, setCount] = useState(0)
  //onpress function
  function onClickhandler(){
    
    console.log()
  }

  return (
    <div>
      <button onClick={onClickhandler}>Counter {}</button>
    </div>
  )
}



export default App