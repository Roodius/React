import { useMemo, useState } from "react";


function App(){
  const [counter, setCounter] = useState(0);
  const [inputvalue,setInputvalue] = useState(1); 


      let count = useMemo(() => {
        console.log("memo got called ..")
let Finalcount =0 ;    
      for(let i=0; i<=inputvalue; i++){
        Finalcount += i;
      }
    return Finalcount
      },[inputvalue])
            

  return <>
    <input onChange={(e) => {
      setInputvalue(e.target.value);
    }} placeholder=""></input>
    <br />
    Sum from 1 to {inputvalue} is {count}
    <br />
    <button onClick={() => {setCounter(counter+1)}}>
      Counter:{counter}
    </button>
  </>
}


export default App;
