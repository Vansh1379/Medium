import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup/Signup'
import SignIn from './pages/SignIn/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App