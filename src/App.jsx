import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'
import UploadPage from './pages/UploadPage/UploadPage'
import Header from './components/Header/Header'
import Subscriptions from './pages/Subscriptions/Subscriptions'
import History from './pages/History/History'
import Playlists from './pages/Playlists/Playlists'
import YourVideos from './pages/YourVideos/YourVideos'
import LikedVideos from './pages/LikedVideos/LikedVideos'
import DefaultVideos from './pages/DefaultVideos/DefaultVideos'

function App() {

  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<DefaultVideos />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="history" element={<History />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="yourvideos" element={<YourVideos />} />
            <Route path="likedvideos" element={<LikedVideos />} />
          </Route>

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
