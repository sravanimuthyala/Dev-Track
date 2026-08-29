import { BrowserRouter,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import Bugs from "./pages/Bugs"
import Goals from "./pages/Goals"
import Coding from "./pages/Coding"
import Learning from "./pages/Learning"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"

const App = () => {
  
  return (
    
    <BrowserRouter>
    <Navbar/>
    <div className="flex">
      <Sidebar/>
      <main className="flex-1 min-w-0"> <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/projects/:id' element={<ProjectDetails/>}/>
      <Route path='/bugs' element={<Bugs/>}/>
      <Route path='/goals' element={<Goals/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/coding' element={<Coding/>}/>
      <Route path='/learning' element={<Learning/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </main>
    </div>
    </BrowserRouter>
  )
}

export default App
