import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PostPage from './pages/PostPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/post/:postTitle" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
