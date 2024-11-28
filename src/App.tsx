import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Ejer1 from './pages/Ejer1'
import Ejer2 from './pages/Ejer2'
import PaginaGatitos from './pages/mario/PaginaGatitos.tsx'
import Ejer3 from './pages/Ejer3'

import Layout from './pages/Layout'
import NotFound from './pages/NotFound'

import Tarjeta from './pages/tarjeta/Tarjeta'
import Uh2 from './pages/BraisCasares/uh2'
import KieneresTU from './pages/KieneresTU'
import Formulario from './pages/Formulario'
import Phone from './pages/Roi/Phone'
import PaginaGaleria from './pages/PaginaGaleria'
import UH3 from './pages/UH3'
import Carousel from './pages/Carrousel.tsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="T" element={<Tarjeta/>} />
          <Route path="E1" element={<Ejer1 />} />
          <Route path="E2" element={<Ejer2 />} />
          <Route path='E3' element={<PaginaGatitos />} />
          <Route path="E3" element={<Ejer3/>} />
          <Route path="KieneresTU" element={<KieneresTU />} />
          <Route path="Formulario" element={<Formulario />} />
          <Route path="Uh2" element={<Uh2 />} />
          <Route path="Phone" element={<Phone />} />
          <Route path="UH3" element={<UH3 />} />
          <Route path="Galeria" element={<PaginaGaleria />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Carousel" element={<Carousel/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
