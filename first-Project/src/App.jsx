import React, { useState } from "react";


function App(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <CustomButton count={count} setCount = {setCount}></CustomButton>
    </div>
  )
}


 // button component  which takes some state as input  and render into button content
function CustomButton(props){
  //onpress function
  function onClickhandler(){
    props.setCount(props.count+1);
  } 

  return React.createElement(
    'button',
    {onClick:onClickhandler},
    `Counter ${props.count}`
  )
}


export default App