import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ejer1 from './pages/Ejer1'
import Ejer2 from './pages/Ejer2'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Uh2 from './pages/BraisCasares/uh2'
import KieneresTU from './pages/KieneresTU'
import Formulario from './pages/Formulario'
import Selector22 from './pages/OSCAR/selector22' 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="E1" element={<Ejer1 />} />
          <Route path="E2" element={<Ejer2 />} />
          <Route path="KieneresTU" element={<KieneresTU />} />
          <Route path="Formulario" element={<Formulario />} />
          <Route path="Uh2" element={<Uh2 />} />
          <Route path="selector22" element={<Selector22/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
