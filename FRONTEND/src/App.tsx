import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import Bugs from "./pages/Bugs"
import Goals from "./pages/Goals"
import Coding from "./pages/Coding"
import Learning from "./pages/Learning"
const App = () => {
  let app="sravani..."
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/projects/:id' element={<ProjectDetails/>}/>
      <Route path='/bugs' element={<Bugs/>}/>
      <Route path='/goals' element={<Goals/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/coding' element={<Coding/>}/>
      <Route path='/learning' element={<Learning/>}/>


    </Routes>
    <div className="bg-red-500 h-screen">
      <h1 className="text-4xl font-bold">{app}</h1>
      
    </div></BrowserRouter>
  )
}

export default App
