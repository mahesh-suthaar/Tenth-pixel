import { Route,Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Procucts from "./pages/Products"
import Products from "./pages/Products"

function App() {

  return (
    <div className="relative h-screen bg-slate-950 flex  items-center justify-center">
      <Nav className='' />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
