import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
