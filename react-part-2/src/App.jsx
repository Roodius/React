import { useEffect, useState } from "react"


function App(){
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9zbWFuIiwiaWF0IjoxNzUxMDM0NzAzfQ.RNhoK7KGbB_ILHzdeguCEeZ7__UuB70iUxtxgnkDbuY";
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    console.log("use Effect Runs")
     setTimeout(() => {
        fetch("http://localhost:3000/todo/Gettodo", {
      method:"GET",
      headers:{
        'Authorization': `Bearer ${token}`,
      }
      }).then((res) => {
      if(!res.ok) throw new Error(`HTTP${res.status}`);
      return res.json();
    }).then((data) => {
      setTodos(data.todos)
      console.log(data)
    }).catch(err => {
      console.log("Fetch Error", err)
    })
  }, 3000)
    
  },[])

  return <> 
    {Array.isArray(todos) && todos.map((todo,i) => (
      <Todo key={i} title={todo.title} description={todo.description}/>
    ))}
  </>
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}


export default App;