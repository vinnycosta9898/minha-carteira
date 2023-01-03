import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'

import { ThemeProvider } from './hooks/theme';

import { AuthProvider } from './hooks/auth';

import dark from './styles/themes/dark';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>  
      <ThemeProvider 
          toggleTheme={function () : void{throw new Error("")}} theme={dark}
      >
          <AuthProvider>
            <App/>
          </AuthProvider>
      </ThemeProvider>
        
  </React.StrictMode>
)
