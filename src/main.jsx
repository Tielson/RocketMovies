import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { Routes } from './routes'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import React from 'react'
import { FilmsProvider } from './hooks/films'
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FilmsProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </FilmsProvider>
    </ThemeProvider>
  </React.StrictMode>
)

