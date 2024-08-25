import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup/Signup'
import SignIn from './pages/SignIn/SignIn'
import Blogs from './pages/Blogs/Blogs'
import Blogid from './pages/BlogId/Blogid'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blogid />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
