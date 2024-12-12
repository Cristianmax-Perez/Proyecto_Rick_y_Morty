import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import Home from './pages/Home/Home'
import Characters from "./pages/Characters/Characters"
import Contact from "./pages/Contact/Contact"
import RouteSite from "./routes.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteSite/>
  </StrictMode>,
)
