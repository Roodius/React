import {RecoilRoot, useRecoilValue, useRecoilValueLoadable, useRecoilStateLoadable} from "recoil"
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
  const currentTodo =  useRecoilValueLoadable(todosAtomFamily(id))
  if (currentTodo.state == "loading") return <div>
    loading....
  </div>
  else if (currentTodo.state == "hasValue") return (<>
<p>{currentTodo.contents.title}</p>
    {currentTodo.contents.description}  
  </>  
)
} 

export default App
