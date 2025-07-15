import {RecoilRoot, useRecoilValue} from "recoil"
import { todosAtomFamily } from "./atoms"



function App() {
  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}




function Todo({id}){
  const currentTodo =  useRecoilValue(todosAtomFamily(id))
  return <>
    <p>{currentTodo.title}</p>
    {currentTodo.description}  
  </>
}

export default App
