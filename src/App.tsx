import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ejer1 from './pages/ejer1'
import Ejer2 from './pages/ejer2'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import KieneresTU from './pages/KieneresTU'
import Formulario from './pages/Formulario'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
            <Route path="E1" element={<Ejer1/>} />
            <Route path="E2" element={<Ejer2/>} />
            <Route path="KieneresTU" element={<KieneresTU/>}/>
            <Route path="Formulario" element={<Formulario/>} />
            <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
