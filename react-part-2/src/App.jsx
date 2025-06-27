

function App(){

  return <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <CardWrapper>
      <div>
      <Hello/>
      </div>
    </CardWrapper>

  <CardWrapper>
    <By />
  </CardWrapper>

  </div>
}

function By(){
  return <>
    By There
  </>
}

function Hello(){
    return <>
      hi there
      </>
}

function CardWrapper({children}){
      return <div style={{border:"black 2px solid", height:"300px", width:"250px", alignItems:"center", display:"flex", justifyContent:"center", margin:"10px",padding:"10px"}}>
         {children}
      </div>
}
// function TextComponent(){x
//     return <div>
//           <p>This is a Text Component</p> 
//     </div>
// }

// function TextComponent2(){
//   return <div>
//     <p>This is a Component 2</p>
//   </div>
// }




export default App; 