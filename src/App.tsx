import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/theme'

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

import dark from './styles/themes/dark';

import { BrowserRouter } from 'react-router-dom';

export default function App(){
  const { theme } = useTheme();
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Routes/>
    </ThemeProvider>
  )
}