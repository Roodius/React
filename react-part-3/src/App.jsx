import { BrowserRouter,Route, Routes, useNavigate } from "react-router-dom"
// import {Landing}  from "./components/Landing";
// import { Dashboard }from "./components/Dashboard"
import {lazy, Suspense} from "react";
const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))
 // React.lazy(() => import("./dfref/fef"))     
function App(){
      
  return <div>
        <BrowserRouter>
        <Appbar/>
          <Routes>
            <Route path="/dashboard" element={
              <Suspense fallback={"loading..."}><Dashboard /></Suspense>
            }/>
            <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
          </Routes>
        </BrowserRouter>
  </div> 

}


function Appbar(){
const navigate = useNavigate();

  return <div>
    <div>
      <button onClick={() => {
        navigate("/dashboard")
      }}>Dashboard</button>
      <button onClick={() => {
        navigate("/")
      }}>Landing</button>
    </div>  
  </div>
}

export default App;