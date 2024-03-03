import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Favourite from './pages/Favourite'
// import Favourite from './components/Favourite'


function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/favorite' element={<Favourite />}></Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
