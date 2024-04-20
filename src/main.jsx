import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { DarkThemeProvider } from './assets/context/DarkThemeContext.jsx'
import { AuthProvider } from './assets/context/AuthContext.jsx'
import { CartProvider } from './assets/context/CartContext.jsx'
import { SearchProvider } from './assets/context/SearchContext.jsx'
import { ProductsProvider } from './assets/context/ProductsContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './assets/router/index.jsx'
import { store } from './assets/redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkThemeProvider>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <ProductsProvider>
              <Provider store={store}>
                <RouterProvider router={router} />
              </Provider>
            </ProductsProvider>
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </DarkThemeProvider>
  </React.StrictMode>,
)