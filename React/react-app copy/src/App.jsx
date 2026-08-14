import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login"
import { useAppContext } from "./contexts/AppContext"
import DropDown from "./components/DropDown"

const App = () => {
  
  const {openLogin, openDropDown} = useAppContext();

  return (
    <div>
      <Navbar />
      {openDropDown && <DropDown /> }
      {openLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App