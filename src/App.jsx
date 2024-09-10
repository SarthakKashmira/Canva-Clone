
import './App.css'
import Home from './pages/Home.jsx'
import Plans from './pages/Plans.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { BrowserRouter,Routes,Route} from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project" element={<Home />} />
        <Route path="/plans" element={<Plans/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
