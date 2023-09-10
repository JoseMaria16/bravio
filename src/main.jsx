import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Camana from './pages/Camana'
import Header from './layout/Header'
import Caballos from './pages/Caballos'
import Promos from './pages/Promos'
import Gallos from './pages/Gallos'
import Toros from './pages/Toros'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/camana',
//     element: <About />,
    
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/promociones' element={<Promos/>}/>
        <Route path='/camana' element={<Camana/>}/>
        <Route path='/caballos' element={<Caballos/>}/>
        <Route path='/gallos' element={<Gallos />}/>
        <Route path='/toros' element={<Toros />}/>
      </Routes>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
