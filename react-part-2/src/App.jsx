import { memo, useCallback, useEffect, useState } from "react"
import axios from "axios"


function useTodos(){
  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todo/Gettodo/")
    .then((res) => {
        settodos(res.data.todos)
    })
  },[])

  return todos; 
}

function App(){
    const todos = useTodos();
  

  return <>
    {todos}
  </>
}

export default App;