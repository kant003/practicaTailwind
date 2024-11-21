import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Ejer1 from './pages/Ejer1'
import Ejer2 from './pages/Ejer2'
import PaginaGatitos from './pages/mario/PaginaGatitos.tsx'
import Ejer3 from './pages/Ejer3'

import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Uh2 from './pages/BraisCasares/uh2'
import KieneresTU from './pages/KieneresTU'
import Formulario from './pages/Formulario'
import PaginaGaleria from './pages/PaginaGaleria'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="E1" element={<Ejer1 />} />
          <Route path="E2" element={<Ejer2 />} />
          <Route path='E3' element={<PaginaGatitos />} />
          <Route path="E3" element={<Ejer3/>} />
          <Route path="KieneresTU" element={<KieneresTU />} />
          <Route path="Formulario" element={<Formulario />} />
          <Route path="Uh2" element={<Uh2 />} />
          <Route path="Galeria" element={<PaginaGaleria />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
