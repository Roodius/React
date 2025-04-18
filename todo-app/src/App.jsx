import { useState } from "react"

/* 
  todo 
  {
     todo:[{title:"todo1", description:"first Todo", compeleted: false},{},{} ..]
  }

  before owr state look like this 
  {
  todo:0
  }

  // Done Todo

*/

function App(){
  const [todos, setTodos] = useState([
    {
      title:"Go to Gym",
      description:"Gym on 8 pm to 10 pm",
      completed:false
    },
    {
      title:"Go to Ghoomi tommarrow",
      description:"ghoomi on 8 pm to 9 pm",
      completed:false
    },
    {
      title:"Go to Collage tommarrow",
      description:"collage on 8 pm",
      completed:false
    },
    {
      title:"Go to hospital",
      description:"collage on 8 pm",
      completed:false
    } 
  ]);


  function addtodo(){
    let newTodos = [];
    for(let i=0; i<todos.length; i++){
      newTodos.push(todos)
    }
    newTodos.push({
        title:"new Todo",
        description:"new Description"       
    })
    setTodos(newTodos)   
  } 
  return (
    <div>
       <button onClick={addtodo}>add Random Todo</button>

       {todos.map(function(todo){
        return (
          <Todo title={todo.title} description={todo.description}/>)                    
       })}

        <NewTodos todos={todos}/>   
    </div>
  )
}


  // component for render a todos 
function Todo(props){
  return (
    <ul>
  <b>{props.title}</b>
  <li>{props.description}</li>
  </ul> 
  )
}

// New components
function NewTodos(props){
  return <div>
  {props.todos.map(function(todo){
    return (
     <div style={{background:"black",color:"white"}}> <Todo title={todo.title} description={todo.description}/></div>
    )                    
   })}
   </div>
}

export default App