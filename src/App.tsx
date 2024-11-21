import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ejer1 from './pages/ejer1'
import Ejer2 from './pages/ejer2'
import Selector22 from './pages/OSCAR/selector22'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
            <Route path="E1" element={<Ejer1/>} />
            <Route path="E2" element={<Ejer2/>} />
            <Route path="selector22" element={<Selector22/>}/>
            <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
