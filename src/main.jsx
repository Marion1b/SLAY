import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/css/style.css';
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)