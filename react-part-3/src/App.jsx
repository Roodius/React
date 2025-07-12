import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom, evenSelectore } from "./store/atom/count";
import { useMemo } from "react";

function App(){
      
  return <div>
    <RecoilRoot>
        <Count />
    </RecoilRoot>
    
  </div> 

}

function Count(){
    console.log("Count Component re-render")
  return <div>
     <CountRenderer/>
    <Buttons /> 
  </div>

}

function CountRenderer(){
  const count = useRecoilValue(countAtom)

  return <div style={{margin:"10px"}}>
    Count : {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer(){
    const isEven = useRecoilValue(evenSelectore)
    return <div>
    
        {(isEven ? "Even this one" : null)}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button style={{margin:"10px"}} onClick={() => {setCount(count => count+1)}}>Increase</button>
    <button onClick={() => {
      // if(count == 0){
      //   return
      // }
        setCount(count => count-1)}}>Decrease</button>
  </div>
}

export default App;