import { useState } from "react";


function App(){
   const [count, setCount] = useState(0);   
  return <div>
    <Count count={count}/>
    <Buttons count={count} setCount={setCount}/>
  </div> 

}

function Count({count}){

  return <div>
     Your Count : {count}
  </div>

}

function Buttons({count, setCount}){

  return <div>
    <button onClick={() => {setCount(count+1)}}>Increase</button>
    <button onClick={() => {
      if(count == 0){
        return
      }
      setCount(count-1)}}>Decrease</button>
  </div>
}

export default App;