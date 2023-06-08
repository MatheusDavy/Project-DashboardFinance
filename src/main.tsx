import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChangeThemeProvider } from './Context/Theme'
import './translate/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <ChangeThemeProvider>
      <App />
    </ChangeThemeProvider>
  //  </React.StrictMode>
)
