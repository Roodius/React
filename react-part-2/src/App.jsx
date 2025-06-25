// import { useState } from "react";

import {useState}  from "react";


function App(){
  const [currTitle, SetcurrTitle] = useState("osman1")



  return (
    <>
      <HeaderWithButton/>
      <Header title = {currTitle}></Header>
      <Header title = "osman2"></Header>
      
    </>
  )
}


function HeaderWithButton(){
  const [firstTitle, setfirstTitle] = useState("my name is osman saifi");
  
  function changeTitle(){
    setfirstTitle("my name is  " + Math.random())
}        
  return <>
  <button onClick={changeTitle}>click me To the Change the Content</button>
  <Header title = {firstTitle}/>
  </>
}


function Header({title}){
  console.log("Rendered");
  return <div> 
        <h1>{title}</h1>
      </div>
}

export default App;