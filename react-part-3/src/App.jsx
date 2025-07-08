import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom } from "./store/atom/count";

function App(){
      
  return <div>
    <RecoilRoot>
        <Count />
    </RecoilRoot>
    
  </div> 

}

function Count(){
    console.log("Count Compo re-render")
  return <div>
     <CountRenderer/>
    <Buttons /> 
  </div>

}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div style={{margin:"10px"}}>
    Count : {count}
  </div>
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom)
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