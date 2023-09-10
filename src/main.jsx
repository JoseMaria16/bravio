import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './layout/Header'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/camana',
    element: <About />,
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/camana' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
