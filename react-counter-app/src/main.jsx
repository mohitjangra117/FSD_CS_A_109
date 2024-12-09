import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
>>>>>>> 5f0fa3f2b06fb4b41b588534783ebb225cd4f7f1
  
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </StrictMode>,
)
