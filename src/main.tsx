//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'flyonui/flyonui.js';

createRoot(document.getElementById('root')!).render(
    <App />
  
)