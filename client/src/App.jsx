import { useState } from 'react'
import { SideNav } from './Components/SideNav'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Animecon from './pages/animecon'
import { Home } from './pages/Home' 
import { Login } from './pages/Login'
import { WatchList } from './pages/WatchList'
import { Signin } from './pages/Signin'
import { AuthContextProvider } from './UserContext'
import PrivateRoute from "./PrivateRoute"
import { Trending } from './pages/Trending'

function App() {
  
  return(
    <div>
      <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute> <Home/></PrivateRoute>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signin' element={<Signin/>}></Route>
          <Route path='/WatchList' element={<PrivateRoute> <WatchList/></PrivateRoute>}></Route>
          <Route path='/Trending' element={<PrivateRoute> <Trending/></PrivateRoute>}></Route>
          <Route path='/animecon' element={<PrivateRoute> <Animecon/></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </AuthContextProvider>

    </div>
  )
}

export default App
