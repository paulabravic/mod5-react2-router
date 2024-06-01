import { Nav } from './components/Nav'
import { Home } from './components/Home';
import { Contacto } from './components/Contacto';
import { Router, Route, Routes } from "react-router-dom"
import { NotFound404 } from './components/NotFound404';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <div className='app'>
        <Nav />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
