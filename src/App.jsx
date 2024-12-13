import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Login from './Pages/Login'
import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/CreatePost" element={<CreatePost />}/>
      </Routes>
    </Router>
  )
}

export default App
