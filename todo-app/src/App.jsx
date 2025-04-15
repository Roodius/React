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
    }
  ]);
  function addtodo(){
    setTodos([...todos,{
      title:"new Todo",
      description:"new Description"
     }])
  }                            
  return (
    <div>
       {/* <Todo title ={todos[0].title} description={todos[0].description}/>
       <Todo title ={todos[1].title} description={todos[1].description}/> */}
       <button onClick={addtodo}>add Random Todo</button>
       {todos.map(function(todo){
        return (
          <Todo title={todo.title} description={todo.description}/>
        )                    
       })}    
    </div>
  )
}

function Todo(props){
  return (
    <ul>
  <b>{props.title}</b>
  <li>{props.description}</li>
  </ul>
  )
}


export default App