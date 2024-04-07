import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { DarkThemeProvider } from './assets/context/DarkThemeContext.jsx'
import { AuthProvider } from './assets/context/AuthContext.jsx'
import { CartProvider } from './assets/context/CartContext.jsx'
import { SearchProvider } from './assets/context/SearchContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './assets/router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkThemeProvider>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </DarkThemeProvider>
  </React.StrictMode>,
)