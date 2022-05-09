import { createTheme, ThemeProvider } from '@mui/material/styles'
import StartPage from '../Pages/Startpage'

const App = () => {
  const mainTheme = createTheme({
    palette: {
      primary: { main: '#e50914', contrastText: '#ffffff' },
      text: {
        primary: '#ffffff',
        secondary: '#757575',
      },
    },
    typography: {
      fontSize: 16,
      button: {
        fontSize: '1rem',
      },
    },
  })

  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <StartPage />
      </div>
    </ThemeProvider>
  )
}

export default App
