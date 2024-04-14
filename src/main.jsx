import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { DarkThemeProvider } from './assets/context/DarkThemeContext.jsx'
import { AuthProvider } from './assets/context/AuthContext.jsx'
import { CartProvider } from './assets/context/CartContext.jsx'
import { SearchProvider } from './assets/context/SearchContext.jsx'
import { ModalProvider } from './assets/context/ModalContext.jsx'
import { ProductsProvider } from './assets/context/ProductsContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './assets/router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkThemeProvider>
      <CartProvider>
        <AuthProvider>
          <SearchProvider>
            <ModalProvider>
              <ProductsProvider>
                <RouterProvider router={router} />
              </ProductsProvider>
            </ModalProvider>
          </SearchProvider>
        </AuthProvider>
      </CartProvider>
    </DarkThemeProvider>
  </React.StrictMode>,
)