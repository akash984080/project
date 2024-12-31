
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Scrool } from './components/Scrool.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Scrool/>
  <App/>

  </BrowserRouter>
)
