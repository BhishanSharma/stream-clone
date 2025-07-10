import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/watch/:id" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
