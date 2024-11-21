import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ejer1 from './pages/Ejer1'
import Ejer2 from './pages/Ejer2'
import Ejer3 from './pages/Ejer3'
import Uh35 from './pages/uh35'
import PaginaGatitos from './pages/mario/PaginaGatitos.tsx'
import Layout from './pages/Layout'
import Boton from "./pages/Boton";
import NotFound from './pages/NotFound'
import Uh20 from './pages/Uh20'
import ScrollPage from './pages/ScrollPage'
import Tarjeta from './pages/tarjeta/Tarjeta'
import Uh2 from './pages/BraisCasares/uh2'
import KieneresTU from './pages/KieneresTU'
import Formulario from './pages/Formulario'
import Selector22 from './pages/OSCAR/selector22' 
import Phone from './pages/Roi/Phone'
import PaginaGaleria from './pages/PaginaGaleria'
import UH3 from './pages/UH3'
import Uh37 from './pages/Uh37'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="ScrollPage" element= {<ScrollPage/>} />
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
          <Route path="uh35" element={<Uh35/>} />
          <Route path="Boton" element={<Boton />} />
          <Route path="Uh37" element={<Uh37/>} />
          <Route path="selector22" element={<Selector22/>}/>
          <Route path="Uh20" element={<Uh20 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
