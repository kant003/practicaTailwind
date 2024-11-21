import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ejer1 from './pages/Ejer1'
import Ejer2 from './pages/Ejer2'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Uh17 from './pages/uh17/Uh17'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
            <Route path="E1" element={<Ejer1/>} />
            <Route path="E2" element={<Ejer2/>} />
            <Route path="uh17/Uh17" element={<Uh17/>} />
            <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
