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
        <Route path='/tenth-pixel' element={<Home />} />
        <Route path='/tenth-pixel/contact' element={<Contact />} />
        <Route path='/tenth-pixel/product' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
