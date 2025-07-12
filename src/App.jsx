import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'
import UploadPage from './pages/UploadPage/UploadPage'
import Header from './components/Header'

function App() {

  return (
    <div  style={{ backgroundColor: "#000", height:"100vh"}}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/watch/:id" element={<VideoPlayer />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
