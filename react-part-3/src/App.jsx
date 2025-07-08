import { useContext, useState } from "react";
import { CountContext } from "./Context";

function App(){
   const [count, setCount] = useState(0);   
  return <div>
    <CountContext.Provider value={{count, setCount}}>
    <Count count={count} setCount={setCount}/>
    </CountContext.Provider>
  </div> 

}

function Count({setCount}){

  return <div>
     <CountRenderer/>
    <Buttons setCount={setCount}/> 
  </div>

}

function CountRenderer(){
    const count =  useContext(CountContext);
    console.log("in the count renderer",count);
  return <div style={{margin:"10px"}}>
    Count : {count}
  </div>
}

function Buttons(){
    const {count ,setCount }= useContext(CountContext);
    console.log("in the button compo",   count)
  return <div>
    <button style={{margin:"10px"}} onClick={() => {setCount(count+1)}}>Increase</button>
    <button onClick={() => {
      if(count == 0){
        return
      }
        setCount(count-1)}}>Decrease</button>
  </div>
}

export default App;