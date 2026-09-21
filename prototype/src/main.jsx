import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DeviceFrame from './DeviceFrame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeviceFrame>
      <App />
    </DeviceFrame>
  </StrictMode>,
)
