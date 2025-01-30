import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './view/CounterViewStyle.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
